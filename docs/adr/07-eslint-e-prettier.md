
# ADR-07: Escolha e Configuração de Ferramentas de Lint e Formatação de Código (ESLint e Prettier)

- **Status**: Aceito  
- **Data**: 20/06/2025  
- **Autores**: Tárcio Teixeira  

---

## Contexto

Para garantir qualidade, consistência e legibilidade do código em todas as aplicações do monorepo, foi decidido padronizar o uso de ferramentas de linting e formatação de código.

O objetivo dessa decisão é:

- Evitar erros comuns de sintaxe e lógica
- Garantir um padrão único de formatação de código entre os desenvolvedores
- Automatizar a correção de estilos de código
- Facilitar revisões de código (PRs) com menos foco em formatação e mais foco em lógica de negócio

---

## Decisão Tomada

Foram escolhidas as seguintes ferramentas:

| Finalidade                  | Ferramenta        |
|-----------------------------|-------------------|
| **Linting (Análise estática e regras de boas práticas)** | ESLint |
| **Formatação automática de código** | Prettier |

Ambas as ferramentas devem ser instaladas e configuradas em todos os projetos frontend dentro do monorepo.

---

## Motivações da Escolha

- **ESLint**: Permite detectar e evitar erros de código e más práticas. Além disso, suporta plugins para React, TypeScript e outras tecnologias utilizadas no monorepo.
- **Prettier**: Facilita a formatação automática de código de forma consistente, sem a necessidade de debates de estilo durante code reviews.
- **Integração entre as duas**: A configuração inclui a integração de ESLint com Prettier, para evitar conflitos entre as regras de lint e de formatação.

---

## Detalhes de Configuração

- **Plugins ESLint utilizados:**  
  - `@typescript-eslint/eslint-plugin`
  - `eslint-plugin-react`
  - `eslint-plugin-react-hooks`
  - `eslint-config-prettier` (para integração com Prettier)

- **Configuração de Prettier:**  
  Regras definidas no arquivo `.prettierrc` na raiz do projeto.

- **Scripts NPM recomendados:**  
  ```json
  {
    "scripts": {
      "lint": "eslint . --ext ts,tsx --report-unused-disable-directives --max-warnings 0",
      "format": "prettier --write \"**/*.{ts,tsx,md}\""
    }
  }
  ```

- **Integração com CI/CD:**  
  O lint será executado nas etapas de build/teste nos pipelines de CI para garantir que o código siga os padrões antes de ser integrado na branch principal.

---

## Consequências

- Todo novo projeto frontend deverá ter ESLint e Prettier configurados.
- Os desenvolvedores deverão executar `npm run lint` e `npm run format` antes de criar PRs.
- Possíveis futuras mudanças nas ferramentas ou regras exigirão uma nova ADR.

---

## Links Relacionados

- [Documentação oficial do ESLint](https://eslint.org/)
- [Documentação oficial do Prettier](https://prettier.io/)
