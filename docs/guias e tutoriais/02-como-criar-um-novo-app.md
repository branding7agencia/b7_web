# ADR-02: Como Criar uma Nova Aplicação no Monorepo

- **Status**: Aceito
- **Data**: 2025-06-07
- **Autores**: dev Tárcio Teixeira

## Contexto e Problema

Para manter a consistência e acelerar o desenvolvimento de novas features ou produtos, precisamos de um processo padronizado para criar novas aplicações (apps) dentro do nosso monorepo. Este guia define o passo a passo para configurar uma nova aplicação React com o nosso stack tecnológico padrão:

- **UI Library**: React
- **Build Tool**: Vite
- **Estilização**: Styled Components
- **Roteamento**: React Router DOM
- **Gerenciamento de Estado**: React Redux com Redux Toolkit

## Decisão

Toda nova aplicação web no monorepo será criada seguindo os passos detalhados abaixo. Isso garante que a configuração de build, a estrutura de pastas e as dependências principais sejam consistentes, facilitando a manutenção e a colaboração entre as equipes.

---

## Tutorial: Criando um Novo App

Siga este guia para adicionar uma nova aplicação ao monorepo.

### Pré-requisitos

1.  Tenha o **NPM v7 ou superior** instalado (necessário para o suporte a workspaces).
2.  Esteja na raiz do monorepo.
3.  Verifique se o `package.json` na raiz do projeto tem a configuração de `workspaces`. Exemplo:
    ```json
    {
      "name": "meu-monorepo",
      "private": true,
      "workspaces": ["apps/*", "packages/*"]
    }
    ```

### Passo 1: Criar a Estrutura do App com Vite

Vamos usar o Vite para gerar o boilerplate inicial da nossa aplicação React com TypeScript.

1.  Navegue até a pasta de aplicações (geralmente `apps/` ou `packages/`).
2.  Execute o comando de criação do Vite. Substitua `<nome-do-app>` pelo nome da sua nova aplicação (ex: `portal-cliente`, `app-admin`).

```bash
# Navegue até a pasta de apps
cd apps

# Execute o create-vite
# O "--" é importante para passar os argumentos para o script do Vite
npm create vite@latest <nome-do-app> -- --template react-ts
```

Após executar, você terá uma nova pasta `apps/<nome-do-app>` com a estrutura básica do React + TypeScript.

### Passo 2: Configurar o `package.json`

Abra o arquivo `apps/<nome-do-app>/package.json` e ajuste-o.

1.  **Nome do Pacote**: O nome deve ser "escopado" com o nome do workspace do monorepo para evitar conflitos. Por exemplo: `"@b7-web/<nome-do-app>"`.
2.  **Scripts**: Adicione scripts para rodar, buildar e validar o código.

**Exemplo de `package.json` ajustado:**

```json
{
  "name": "@b7-web/<nome-do-app>",
  "private": true,
  "version": "0.1.0",
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "tsc && vite build",
    "lint": "eslint . --ext ts,tsx --report-unused-disable-directives --max-warnings 0",
    "preview": "vite preview"
  },
  "dependencies": {
    "react": "^18.2.0",
    "react-dom": "^18.2.0"
  },
  "devDependencies": {
    "@types/react": "^18.2.66",
    "@types/react-dom": "^18.2.22",
    "@typescript-eslint/eslint-plugin": "^7.2.0",
    "@typescript-eslint/parser": "^7.2.0",
    "@vitejs/plugin-react": "^4.2.1",
    "eslint": "^8.57.0",
    "eslint-plugin-react-hooks": "^4.6.0",
    "eslint-plugin-react-refresh": "^0.4.6",
    "typescript": "^5.2.2",
    "vite": "^5.2.0"
  }
}
```

### Passo 3: Instalar Dependências do Stack Padrão

Agora, vamos adicionar `styled-components`, `react-router-dom` e `react-redux`.

```bash
# Navegue para a pasta do novo app
cd <nome-do-app>

# Instale as dependências de produção, as opções informadas a abaixo são um exemplo, mas instale somente as que realmente serão usados pelo projeto.
npm install styled-components react-router-dom react-redux @reduxjs/toolkit

# Instale as tipagens para desenvolvimento
npm install @types/styled-components --save-dev
```

### Passo 4: Estrutura de Pastas Inicial

Dentro da pasta `src/`, recomendamos a seguinte estrutura para começar:

```
src/
|-- app/
|   |-- store.ts         # Configuração da store do Redux
|   |-- routes.tsx       # Definição das rotas da aplicação
|
|-- components/          # Componentes reutilizáveis (ex: Button, Input)
|   |-- index.ts
|
|-- features/            # Lógica de negócio e estado por feature (ex: auth, products)
|   |-- auth/
|   |   |-- authSlice.ts
|   |   |-- Login.tsx
|
|-- pages/               # Componentes de página, que montam as telas
|   |-- HomePage.tsx
|   |-- LoginPage.tsx
|
|-- styles/              # Estilos globais, tema, etc.
|   |-- GlobalStyles.ts
|   |-- theme.ts
|
|-- App.tsx              # Componente principal que une tudo
|-- main.tsx             # Ponto de entrada da aplicação
```

### Passo 5: Configurar as Ferramentas

_(Esta seção permanece idêntica à versão anterior, pois o código de configuração de Redux, Router e Styled Components não depende do gerenciador de pacotes.)_

#### a Styled Components (Tema e Estilos Globais)

Crie `src/styles/theme.ts` e `src/styles/GlobalStyles.ts`.

**`src/styles/theme.ts`**

```typescript
export const theme = {
  colors: {
    primary: '#0070f3',
    secondary: '#ff4081',
    background: '#ffffff',
    text: '#333333',
  },
  fonts: {
    main: 'Arial, sans-serif',
  },
};
```

**`src/styles/GlobalStyles.ts`**

```typescript
import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: ${({ theme }) => theme.fonts.main};
    background-color: ${({ theme }) => theme.colors.background};
    color: ${({ theme }) => theme.colors.text};
  }
`;
```

#### b Redux (Store)

**`src/app/store.ts`**

```typescript
import { configureStore } from '@reduxjs/toolkit';
// Importe seus reducers/slices aqui quando criá-los
// import authReducer from '../features/auth/authSlice';

export const store = configureStore({
  reducer: {
    // auth: authReducer,
  },
});

// Tipagem para hooks do Redux
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
```

#### c React Router

**`src/app/routes.tsx`**

```typescript
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import LoginPage from '../pages/LoginPage'; // Exemplo

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
  },
  {
    path: '/login',
    element: <LoginPage />,
  }
]);

export const AppRoutes = () => <RouterProvider router={router} />;
```

#### d) Unir tudo no Ponto de Entrada (`main.tsx`)

Modifique `src/main.tsx` para incluir os Providers.

```tsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';

import { store } from './app/store.ts';
import { AppRoutes } from './app/routes.tsx';
import { GlobalStyles } from './styles/GlobalStyles.ts';
import { theme } from './styles/theme.ts';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <AppRoutes />
      </ThemeProvider>
    </Provider>
  </React.StrictMode>
);
```

### Passo 6: Verificação

1.  Volte para a raiz do monorepo.
2.  Execute o comando para instalar as dependências de todos os workspaces.

    ```bash
    # Na raiz do monorepo
    npm install
    ```

3.  Execute o script `dev` do novo app usando a flag `-w` (ou `--workspace`).

    ```bash
    # A flag -w diz ao NPM para rodar o comando no workspace especificado
    npm run dev -w @meu-workspace/<nome-do-app>
    ```

4.  Abra o navegador no endereço indicado (geralmente `http://localhost:5173`). Se você vir sua página de exemplo funcionando, a configuração está correta!

### Próximos Passos

- Adicione o novo app aos scripts da raiz do `package.json` para facilitar a execução de tarefas comuns.
- Configure o pipeline de CI/CD para buildar e testar a nova aplicação.
- Comece a desenvolver suas features criando `slices` no Redux e componentes de página.
