# ADR-03: Como Criar um Pacote Compartilhado (Shared Package)

-   **Status**: Aceito
-   **Data**: 2025-06-09
-   **Autores**: dev Tàrcio Teixeira

## Contexto e Problema

À medida que nossas aplicações (`apps`) crescem, surge a necessidade de compartilhar código entre elas. Componentes de UI (como Botões, Inputs), hooks customizados, funções utilitárias (formatação de datas, cálculos) e tipos do TypeScript são exemplos de código que, se duplicados, geram inconsistência e dificuldade de manutenção.

Precisamos de um processo padronizado para criar pacotes internos reutilizáveis, seguindo o princípio DRY (Don't Repeat Yourself).

## Decisão

Todo código compartilhado será criado como um pacote independente dentro da pasta `packages/` na raiz do monorepo. Cada pacote terá sua própria `package.json`, um processo de build para transpilar TypeScript/TSX para JavaScript, e será consumido pelas aplicações através do protocolo `workspace:*` do NPM. Usaremos a ferramenta `tsup` para o processo de build por sua simplicidade e eficiência.

---

## Tutorial: Criando um Novo Pacote Compartilhado

Este guia mostra o passo a passo para criar um pacote de componentes React compartilhados chamado `ui-kit`.

### Passo 0: Pré-requisitos

Certifique-se de que o `package.json` na raiz do seu monorepo está configurado para reconhecer a pasta `packages`:

```json
// Na raiz do projeto: /package.json
{
  "name": "b7-web",
  "workspaces": [
    "apps/*",
    "packages/*" // <-- Verifique se esta linha existe
  ]
}
```

### Passo 1: Criar a Estrutura do Pacote

1.  Se ainda não existir, crie a pasta `packages` na raiz do seu projeto.
2.  Dentro de `packages`, crie uma pasta para o seu novo pacote. Usaremos `ui-kit` como exemplo.
3.  Dentro de `packages/ui-kit`, crie uma pasta `src` e um arquivo `package.json`.

A estrutura ficará assim:
```
meu-monorepo/
|-- apps/
|-- packages/
|   |-- ui-kit/
|       |-- src/
|       |-- package.json
|
|-- package.json
```

### Passo 2: Configurar o `package.json` do Pacote

Este é o passo mais importante. Ele define como seu pacote é identificado, quais são seus pontos de entrada e como ele é "buildado".

**`packages/ui-kit/package.json`**
```json
{
  "name": "@b7-web/ui-kit",
  "version": "0.1.0",
  "private": true,
  "main": "./dist/index.js",
  "module": "./dist/index.mjs",
  "types": "./dist/index.d.ts",
  "exports": {
    ".": {
      "import": "./dist/index.mjs",
      "require": "./dist/index.js",
      "types": "./dist/index.d.ts"
    }
  },
  "scripts": {
    "build": "tsup src/index.ts --format esm,cjs --dts --external react",
    "dev": "npm run build -- --watch",
    "lint": "eslint . --ext ts,tsx --report-unused-disable-directives --max-warnings 0"
  },
  "peerDependencies": {
    "react": "^18.2.0",
    "react-dom": "^18.2.0"
  },
  "devDependencies": {
    "@types/react": "^18.2.66",
    "eslint": "^8.57.0",
    "react": "^18.2.0",
    "tsup": "^8.0.2",
    "typescript": "^5.2.2"
  }
}
```
**Pontos Chave:**
* `"name"`: O nome escopado do pacote. É assim que suas aplicações irão importá-lo.
* `"main"`, `"module"`, `"types"`, `"exports"`: Definem os pontos de entrada do pacote após o build. Isso garante que ele funcione com diferentes sistemas de módulos (ESM e CommonJS).
* `"scripts"`: `build` para gerar os arquivos e `dev` para observar mudanças e rebuildar automaticamente.
* `"peerDependencies"`: **MUITO IMPORTANTE!** `react` é uma dependência de pares. Isso diz ao seu pacote para usar a instância do React da aplicação que o está consumindo, evitando o erro de ter múltiplas cópias do React na mesma aplicação.

### Passo 3: Criar Código Compartilhado (Exemplos)

Dentro da pasta `packages/ui-kit/src/`, crie seus componentes, hooks, etc.

**`packages/ui-kit/src/Button.tsx`**
```tsx
import React from 'react';

export interface ButtonProps {
  children: React.ReactNode;
  onClick: () => void;
}

export const Button = ({ children, onClick }: ButtonProps) => {
  return (
    <button
      onClick={onClick}
      style={{
        padding: '10px 20px',
        fontSize: '16px',
        backgroundColor: '#007bff',
        color: 'white',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer'
      }}
    >
      {children}
    </button>
  );
};
```

**`packages/ui-kit/src/index.ts` (Ponto de Entrada)**
Este arquivo define a "API pública" do seu pacote. Tudo que for exportado aqui poderá ser importado por outras aplicações.

```ts
// Exportando componentes
export * from './Button';

// Exemplo se tivesse um hook
// export * from './useCounter';
```

### Passo 4: Configurar o Build e o TypeScript

1.  **Instale as dependências** que você listou no `package.json` do pacote.
    ```bash
    # Na raiz do monorepo, o npm instalará as dependências para todos os workspaces
    npm install
    ```

2.  Crie um arquivo `tsconfig.json` dentro do pacote.

    **`packages/ui-kit/tsconfig.json`**
    ```json
    {
      "extends": "../../tsconfig.base.json", // Estenda a configuração base da raiz
      "compilerOptions": {
        "jsx": "react-jsx",
        "outDir": "dist" // Opcional, tsup já lida com isso
      },
      "include": ["src"],
      "exclude": ["node_modules", "dist"]
    }
    ```
    *(**Nota**: Você pode criar um `tsconfig.base.json` na raiz para compartilhar configurações comuns de TypeScript entre todos os seus pacotes e apps).*


### Passo 5: Usar o Pacote em uma Aplicação

Agora, vamos usar nosso novo `<Button>` em uma aplicação existente, como a `landing-page`.

1.  **Adicione o pacote como dependência** no `package.json` da aplicação.

    **`apps/landing-page/package.json`**
    ```json
    {
      "name": "@b7-web/landing-page",
      // ...
      "dependencies": {
        "@b7-web/ui-kit": "workspace:*", // <-- ADICIONE ESTA LINHA
        "react": "^18.2.0",
        "react-dom": "^18.2.0",
        // ... outras dependências
      }
    }
    ```
    O protocolo `workspace:*` é a mágica do NPM que cria o link para o seu pacote local.

2.  **Instale as dependências novamente** a partir da raiz para que o NPM crie o link.
    ```bash
    # Na raiz do monorepo
    npm install
    ```

3.  **Importe e use seu componente** na aplicação.

    **`apps/landing-page/src/App.tsx` (exemplo)**
    ```tsx
    import { Button } from '@b7-web/ui-kit'; // <-- Importe do seu pacote!

    function App() {
      const handleClick = () => {
        alert('Botão do pacote compartilhado clicado!');
      };

      return (
        <div>
          <h1>Minha Landing Page</h1>
          <p>Este botão vem do nosso pacote de UI:</p>
          <Button onClick={handleClick}>Clique Aqui!</Button>
        </div>
      );
    }

    export default App;
    ```

### Passo 6: Workflow de Desenvolvimento

Para trabalhar de forma eficiente:

1.  **Terminal 1:** Inicie o processo de build em modo "watch" para seu pacote compartilhado.
    ```bash
    # Na raiz do monorepo
    npm run dev -w @b7-web/ui-kit
    ```

2.  **Terminal 2:** Inicie o servidor de desenvolvimento da sua aplicação.
    ```bash
    # Na raiz do monorepo
    npm run dev -w @b7-web/landing-page
    ```

Agora, sempre que você salvar uma alteração no código do `ui-kit`, o `tsup` irá rebuildar o pacote automaticamente, e o Vite (da `landing-page`) detectará a mudança e atualizará o navegador.