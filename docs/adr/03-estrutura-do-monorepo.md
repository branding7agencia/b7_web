# ADR-003: Estrutura de Pastas do Monorepo

- **Status:** Aceito
- **Data:** 2025-06-09
- **Decisor(es):** [dev Tárcio Teixeira]

---

## Contexto e Problema

A organização de arquivos e pastas em um monorepo é fundamental para sua escalabilidade e manutenibilidade. Sem uma estrutura clara e padronizada, o repositório pode se tornar caótico, dificultando a localização de código, a separação de responsabilidades e o onboarding de novos desenvolvedores.

Precisávamos definir uma estrutura de diretórios que fosse intuitiva, que separasse claramente as aplicações dos pacotes reutilizáveis e que seguisse as convenções da indústria para facilitar a integração com ferramentas como o Turborepo.

---

## Decisão

Decidimos adotar a seguinte estrutura de pastas na raiz do nosso monorepo, que é um padrão recomendado e utilizado pela comunidade de desenvolvimento e por ferramentas como o Turborepo:

- **`apps/`**: Para aplicações completas e executáveis que serão entregues aos usuários finais.
- **`packages/`**: Para código compartilhado e reutilizável, como componentes de UI, funções utilitárias e configurações.
- **`docs/`**: Para a documentação voltada para os desenvolvedores, incluindo estes ADRs e guias de contribuição.
- **`.github/`**: Para arquivos de configuração específicos do GitHub, principalmente os workflows de CI/CD do GitHub Actions.

---

## Racional e Consequências

Cada diretório tem uma responsabilidade clara, o que torna o projeto mais previsível e organizado.

### `apps/`

- **Propósito**: Contém os projetos que são "executáveis" ou "implantáveis". Cada subpasta aqui é uma unidade de trabalho independente, como um site Next.js, uma API de backend ou um aplicativo mobile.
- **Consequências**: Essa separação facilita a configuração de pipelines de build e deploy. Podemos, por exemplo, acionar um deploy apenas para a aplicação `web` quando seu código específico for alterado, sem interferir na `api`.

### `packages/`

- **Propósito**: É o coração da estratégia de reuso de código do monorepo. Abriga pacotes que não são implantáveis sozinhos, mas que fornecem funcionalidades para as `apps`.
- **Exemplos Comuns**:
  - `@repo/ui`: Uma biblioteca de componentes de UI (React, Vue, etc.) compartilhada.
  - `@repo/utils`: Funções utilitárias genéricas (formatação de datas, cálculos, etc.).
  - `@repo/eslint-config`: Configuração centralizada do ESLint para garantir um padrão de código em todo o repositório.
  - `@repo/typescript-config`: Arquivos `tsconfig.json` base, compartilhados entre todos os projetos.
- **Consequências**: Promove a consistência e o princípio **DRY (Don't Repeat Yourself)**. Uma alteração em um componente na pasta `ui` é refletida em todas as aplicações que o utilizam.

### `docs/`

- **Propósito**: Centraliza toda a documentação que ajuda os desenvolvedores a entender e a trabalhar no projeto.
- **Consequências**: Mantém a raiz do projeto limpa e cria uma fonte única da verdade para decisões de arquitetura (ADRs), guias de configuração e outras notas importantes para a equipe.

### `.github/`

- **Propósito**: É um diretório padrão utilizado pelo GitHub para automação. Colocamos aqui nossos workflows do GitHub Actions.
- **Consequências**: Permite a automação de tarefas essenciais de CI/CD, como rodar testes, lint e build em cada pull request. A integração com o Cache Remoto do Turborepo é configurada aqui, acelerando drasticamente os tempos de execução na pipeline.

---

## Alternativas Consideradas

- **Estrutura Plana (sem `apps` e `packages`):** Colocar todos os projetos na raiz. Esta opção foi descartada por ser altamente desorganizada e não escalável, tornando impossível distinguir entre código compartilhável e aplicações finais.
- **Estrutura por Domínio/Feature:** Agrupar o código por funcionalidade de negócio (ex: `/autenticacao`, `/pagamentos`). Embora seja um padrão válido para sistemas muito grandes e complexos, ele aumenta a complexidade inicial e é menos convencional que a estrutura `apps/packages`, que atende perfeitamente às nossas necessidades atuais.
