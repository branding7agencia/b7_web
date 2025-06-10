# ADR-001: Adoção do Turborepo como Orquestrador de Build

* **Status:** Aceito
* **Data:** 2025-06-09
* **Decisor(es):** [dev Tárcio Teixeira]

## Contexto e Problema

Ao iniciar este projeto, optamos por uma arquitetura de monorepo para centralizar nosso código, facilitar o compartilhamento de pacotes (`packages`) entre diferentes aplicações (`apps`) e unificar os padrões de desenvolvimento.

No entanto, um monorepo apresenta desafios de performance e complexidade, como:
* **Tempos de build lentos:** Executar `build`, `lint` e `testes` em todo o repositório a cada mudança é ineficiente e demorado.
* **Execução de tarefas repetitivas:** O sistema de build não tinha como saber se um pacote já havia sido "buildado" e não precisava ser reprocessado, resultando em trabalho computacional desperdiçado.
* **Gerenciamento de dependências:** Precisávamos garantir que as tarefas fossem executadas na ordem correta (ex: "buildar" um pacote de componentes `ui` antes de "buildar" a aplicação `web` que o consome).

Precisávamos de uma ferramenta que orquestrasse as tarefas do monorepo de forma inteligente e performática, sem adicionar uma camada complexa de configuração.

## Decisão

Decidimos adotar o **Turborepo** como a ferramenta principal para gerenciamento e execução de tarefas (build system) no nosso monorepo.

O Turborepo será responsável por orquestrar todos os scripts definidos nos `package.json` dos workspaces, como `build`, `dev`, `lint` e `test`.

## Racional e Consequências

A escolha pelo Turborepo se baseia nos seguintes benefícios:

### Vantagens

* **Cacheamento Inteligente (Caching):** Esta é a principal vantagem. O Turborepo cria um cache dos resultados das tarefas. Se os arquivos de um pacote não foram alterados, sua tarefa de build não será executada novamente; o resultado será recuperado instantaneamente do cache.
* **Cache Remoto (Remote Caching):** O cache pode ser compartilhado na nuvem (via Vercel, que oferece um plano gratuito generoso). Isso significa que se um desenvolvedor já "buildou" o projeto, a pipeline de CI/CD e outros desenvolvedores podem reutilizar o mesmo cache, reduzindo os tempos de build de minutos para segundos.
* **Execução Paralela:** O Turborepo utiliza todos os núcleos de CPU disponíveis para executar tarefas independentes em paralelo, o que acelera significativamente o processo, tanto em desenvolvimento local quanto em CI.
* **Facilidade de Adoção:** A configuração é mínima e declarativa através de um único arquivo `turbo.json`. Ele funciona sobre os scripts que já existem no `package.json`, tornando sua integração em projetos existentes ou novos muito simples.
* **Análise do Grafo de Dependências:** Ele entende a estrutura do monorepo e executa as tarefas na ordem topológica correta, garantindo consistência.

### Desvantagens e Trade-offs

* **Menos "Opinativo" que Alternativas:** Diferente do Nx, o Turborepo não oferece ferramentas avançadas para geração de código (scaffolding) ou plugins complexos. Seu foco é ser um orquestrador de tarefas extremamente rápido, o que é exatamente o que precisamos no momento.

## Alternativas Consideradas

1.  **Nx (Nrwl Extensions):** Uma ferramenta poderosa e mais completa, com um ecossistema rico de plugins. Consideramos o Nx, mas para o estágio atual do nosso projeto, sua complexidade de configuração e abordagem mais opinativa foram vistas como um overhead desnecessário. Priorizamos a simplicidade e a velocidade de adoção do Turborepo.

2.  **Lerna:** Foi uma das ferramentas pioneiras, mas seu foco principal sempre foi a publicação de pacotes. Suas capacidades de orquestração de tarefas são consideradas mais lentas que as do Turborepo.

3.  **Scripts NPM/Yarn/PNPM Puros:** Utilizar apenas os `workspaces` nativos sem uma ferramenta de orquestração. Esta opção foi descartada por não oferecer nenhuma forma de cacheamento ou execução paralela, o que anularia os principais benefícios de performance que buscamos.

---