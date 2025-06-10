// .eslintrc.js
module.exports = {
  root: true,
  // Define os ambientes onde o código vai rodar (browser, node)
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  // Estende as configurações recomendadas pelo ESLint e TypeScript
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
  ],
  // Define o parser para que o ESLint entenda TypeScript
  parser: '@typescript-eslint/parser',
  // Adiciona o plugin do TypeScript
  plugins: [
    '@typescript-eslint',
  ],
  // Regras customizadas. Adicione aqui as regras que desejar.
  rules: {
    // Exemplo: desabilitar a regra que exige "return" explícito em todas as funções
    '@typescript-eslint/explicit-module-boundary-types': 'off',
  },
  // Ignora pastas e arquivos específicos
  ignorePatterns: ['node_modules/', 'dist/', '.turbo/'],
};