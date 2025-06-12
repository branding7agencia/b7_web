// eslint.config.js
import globals from 'globals';
import tseslint from 'typescript-eslint';
import pluginReact from 'eslint-plugin-react';
import pluginReactHooks from 'eslint-plugin-react-hooks';
import pluginReactRefresh from 'eslint-plugin-react-refresh';
import js from '@eslint/js';

export default tseslint.config(
  // 1. Ignorar pastas globais
  {
    ignores: ['node_modules/', 'dist/', '.turbo/'],
  },

  // 2. Configuração base para arquivos JavaScript (como este próprio config)
  {
    files: ['**/*.js'],
    ...js.configs.recommended,
    languageOptions: {
      globals: {
        ...globals.node,
      },
    },
  },

  // 3. Configuração principal para todos os arquivos TypeScript e React no monorepo
  {
    files: ['apps/**/*.{ts,tsx}'], // Alvo explícito nos seus apps
    // 'extends' é a forma mais clara de herdar configurações base
    extends: [
      ...tseslint.configs.recommended, // Aplica o parser e regras do TypeScript
      pluginReact.configs.recommended, // Aplica regras do React
    ],
    plugins: {
      'react-hooks': pluginReactHooks,
      'react-refresh': pluginReactRefresh,
    },
    languageOptions: {
      globals: {
        ...globals.browser, // Habilita variáveis de navegador (window, document)
      },
    },
    rules: {
      // Suas regras personalizadas vêm aqui:
      'react/react-in-jsx-scope': 'off', // Desliga a regra antiga do React
      'react-hooks/rules-of-hooks': 'error', // Regra importante para hooks
      'react-hooks/exhaustive-deps': 'warn', // Regra importante para hooks
      'react-refresh/only-export-components': 'warn', // Regra do Vite
    },
    settings: {
      react: {
        version: 'detect', // Detecta a versão do React automaticamente
      },
    },
  }
);
