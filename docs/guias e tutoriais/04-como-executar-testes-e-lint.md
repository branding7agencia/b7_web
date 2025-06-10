# ADR-04: Como Executar Testes e Lint

-   **Status**: Aceito
-   **Data**: 2025-06-09
-   **Autores**: dev Tácio Teixeira

## Contexto e Problema

Com múltiplos pacotes e aplicações, manter um padrão de código consistente e garantir que novas alterações não introduzam bugs é um desafio. Precisamos de ferramentas automatizadas para verificar a qualidade do código (linting), a formatação e para executar testes unitários e de integração de forma padronizada em todo o monorepo.

## Decisão

1.  **Linting e Formatação**: Adotaremos o **ESLint** para análise estática de código e o **Prettier** para formatação automática. As configurações serão centralizadas na raiz do monorepo para garantir consistência em todos os pacotes.
2.  **Testes**: Utilizaremos o **Vitest** como framework de testes. Ele oferece alta performance, integração nativa com o Vite e uma API familiar (semelhante ao Jest). Cada pacote ou aplicação responsável por seus próprios testes terá o `vitest` como dependência de desenvolvimento.
3.  **Execução**: Scripts NPM serão criados na raiz do projeto para executar o lint e os testes em todos os workspaces de forma simples e direta.

---

## 🔧 1. Configurando Linting e Formatação (Na Raiz)

A configuração do ESLint e Prettier é feita **uma única vez** na raiz do monorepo para garantir que todos sigam as mesmas regras.

### Instalação

Execute o seguinte comando na **raiz** do seu projeto:

```bash
npm install eslint prettier eslint-plugin-react eslint-plugin-react-hooks eslint-config-prettier @typescript-eslint/parser @typescript-eslint/eslint-plugin --save-dev
```

### Configuração

1.  **Crie um arquivo `.eslintrc.cjs` na raiz:**

    ```javascript
    // .eslintrc.cjs
    module.exports = {
      root: true,
      env: { browser: true, es2020: true },
      extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:react-hooks/recommended',
        'prettier', // Adiciona o Prettier como última extensão
      ],
      ignorePatterns: ['dist', '.eslintrc.cjs'],
      parser: '@typescript-eslint/parser',
      plugins: ['react-refresh'],
      rules: {
        'react-refresh/only-export-components': [
          'warn',
          { allowConstantExport: true },
        ],
      },
    };
    ```

2.  **Crie um arquivo `.prettierrc` na raiz:**

    ```json
    {
      "semi": true,
      "trailingComma": "all",
      "singleQuote": true,
      "printWidth": 80,
      "tabWidth": 2
    }
    ```

### Scripts na Raiz

Adicione os seguintes scripts ao `package.json` da **raiz** do seu monorepo:

```json
{
  "scripts": {
    "lint": "eslint . --ext ts,tsx --report-unused-disable-directives --max-warnings 0",
    "lint:fix": "eslint . --ext ts,tsx --fix",
    "format": "prettier --write \"**/*.{ts,tsx,md,json}\""
  }
}
```

Agora você pode rodar `npm run lint` ou `npm run format` da raiz e os comandos serão aplicados a todos os arquivos do projeto.

---

## 🧪 2. Configurando Testes com Vitest (Por Pacote)

A configuração de testes é feita em cada pacote ou app que contenha testes. Isso dá autonomia a cada pacote.

### Exemplo: Adicionando Testes ao `@b7-web/ui-kit`

1.  **Instale as dependências de teste** no pacote específico.

    ```bash
    # Na raiz, use a flag -w para instalar no workspace desejado
    npm install vitest @testing-library/react @testing-library/jest-dom jsdom --save-dev -w @b7-web/ui-kit
    ```

2.  **Crie um arquivo de configuração** para o Vitest dentro do pacote `ui-kit`.

    **`packages/ui-kit/vite.config.ts`**
    ```ts
    /// <reference types="vitest" />
    import { defineConfig } from 'vite';

    export default defineConfig({
      test: {
        globals: true,
        environment: 'jsdom',
        setupFiles: './src/test/setup.ts', // Opcional: para configs globais de teste
      },
    });
    ```

3.  (Opcional) Crie o arquivo de setup (`setup.ts`) se precisar de imports globais para os testes.

    **`packages/ui-kit/src/test/setup.ts`**
    ```ts
    import '@testing-library/jest-dom';
    ```

4.  **Adicione o script de teste** ao `package.json` do `ui-kit`.

    **`packages/ui-kit/package.json`**
    ```json
    {
      "scripts": {
        "test": "vitest",
        "test:watch": "vitest --watch"
        // ... outros scripts
      }
    }
    ```

5.  **Escreva seu primeiro teste!**

    **`packages/ui-kit/src/Button.test.tsx`**
    ```tsx
    import { render, screen } from '@testing-library/react';
    import { Button } from './Button';
    import { describe, it, expect } from 'vitest';

    describe('Button Component', () => {
      it('should render the button with the correct text', () => {
        render(<Button onClick={() => {}}>Clique Aqui</Button>);
        
        const buttonElement = screen.getByRole('button', { name: /Clique Aqui/i });
        expect(buttonElement).toBeInTheDocument();
      });
    });
    ```

---

## 🚀 3. Executando as Validações

Com tudo configurado, você pode executar os comandos a partir da **raiz do monorepo**.

### Executar Lint em todo o projeto
```bash
npm run lint
```

### Executar Testes

* **Para um pacote específico:**
    ```bash
    npm test -w @b7-web/ui-kit
    ```

* **Para TODOS os pacotes e apps de uma vez:**
    Adicione um script principal de teste no `package.json` da **raiz**:

    ```json
    {
      "scripts": {
        "test": "npm test -ws"
        // ... outros scripts
      }
    }