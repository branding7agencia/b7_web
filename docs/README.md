# Documentação do Monorepo

Bem-vindo à central de documentação do nosso projeto! O objetivo deste diretório é organizar todo o conhecimento técnico, decisões de arquitetura e guias práticos de forma clara e acessível.

A documentação está dividida nas seguintes categorias para facilitar a busca por informações.

## ADR (Architectural Decision Records)

Nesta pasta, você encontrará os registros de todas as decisões de arquitetura importantes que tomamos. Um ADR é um documento curto que descreve o contexto de um problema, a decisão tomada e as consequências dessa decisão. Eles são o nosso "diário" de engenharia e a fonte da verdade sobre o "porquê" de nossas escolhas técnicas.

**Documentos disponíveis:**
- **ADR-01:** Escolha do Turborepo para orquestração de tasks.
- **ADR-02:** Uso do NPM como gerenciador de pacotes e workspaces.
- **ADR-03:** Definição da Estrutura de Pastas do Monorepo.
- **ADR-04:** Estratégia de Versionamento e Processo de Release.
- **ADR-05:** Escolha das Tecnologias para o Frontend.
- **ADR-06:** Escolha das Tecnologias para o Backend.
- **ADR-07:** Padronização de Estilo de Código com ESLint e Prettier.

## Guias e Tutoriais

Esta pasta contém guias práticos e passo a passo (`how-to's`). Se você precisa realizar uma tarefa específica e quer saber a sequência de comandos ou o processo a ser seguido, este é o lugar certo.

**Documentos disponíveis:**
- Como configurar o ambiente de desenvolvimento.
- Como criar um pacote compartilhado (shared).
- Como executar testes e linting.
- **Subpasta: Como Criar uma Nova Aplicação**
  - Guia para criar uma aplicação Frontend.
  - Guia para criar uma aplicação Backend.

## Explicações e Conceitos

Aqui ficam os documentos que explicam os "porquês" e "comos" de conceitos e padrões que utilizamos. Diferente dos guias, o foco aqui é o entendimento profundo de um tópico, e não um passo a passo para executar uma tarefa. É ideal para quem é novo no projeto ou quer se aprofundar em nossa arquitetura.

**Documentos disponíveis:**
- Visão Geral do nosso Pipeline de CI/CD.
- Estratégias para Compartilhamento de Código no Monorepo.
- Entendendo o Processo de Release e Versionamento.

---

### Como Contribuir

A documentação é um organismo vivo e responsabilidade de todos. Se você tomar uma decisão importante, crie um novo **ADR**. Se você descobrir um processo novo, escreva um **Guia**. Se você domina um conceito que outros podem ter dificuldade, crie uma **Explicação**.