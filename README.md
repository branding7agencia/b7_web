b7-web Monorepo
Bem-vindo ao monorepo b7-web. Este repositório é gerenciado com Turborepo e contém nossas aplicações web, serviços de backend e bibliotecas de código compartilhado.

O que há aqui dentro?
Este monorepo utiliza Turborepo para gerenciar múltiplos projetos com eficiência. A estrutura é dividida da seguinte forma:

Estrutura de Pastas
apps/: Contém as aplicações "finais", que são implantáveis.

Aplicações Frontend: Construídas com React, Vite, Styled-Components, React-Router e Redux.

Serviços Backend: Aplicações em Python utilizando o framework Flask.

packages/: Contém códigos compartilhados, utilizados pelas aplicações em apps/.

@repo/ui: Biblioteca de componentes React compartilhados.

@repo/eslint-config: Configurações do ESLint para todo o monorepo.

@repo/typescript-config: Arquivos tsconfig.json base, utilizados pelos outros projetos.

@repo/database: Módulos para interação com o banco de dados (SQL).

docs/: Contém a documentação do projeto.

Tecnologias e Ferramentas Principais
Este monorepo vem com um conjunto de ferramentas para garantir a qualidade e a consistência do código:

Turborepo: Orquestrador de tarefas e sistema de cache de alta performance.

TypeScript: Para tipagem estática e um desenvolvimento mais seguro.

ESLint: Para identificar e corrigir padrões problemáticos no código (linting).

Prettier: Para garantir um estilo de formatação de código consistente.

Changesets: Para gerenciar versionamento, changelogs e o processo de publicação dos pacotes.

Primeiros Passos
Siga os passos abaixo para configurar o ambiente de desenvolvimento.

Clone o repositório:

git clone https://github.com/branding7agencia/b7_web.git
cd b7-web

Instale as dependências:

npm install

Scripts Úteis
Todos os comandos devem ser executados a partir da raiz do monorepo, utilizando npm run.

Desenvolvimento: Inicia os servidores de desenvolvimento de todas as aplicações.

npm run dev

Build: Gera as versões de produção de todas as aplicações e pacotes.

npm run build

Lint: Executa o ESLint em todos os pacotes e aplicações.

npm run lint

Versionamento e Publicação
Quando você fizer uma alteração que precise ser lançada, utilize o Changesets:

Adicione uma mudança:
Este comando interativo perguntará quais pacotes foram modificados, o tipo de mudança (patch, minor, major) e uma descrição.

npx changeset add

Crie a versão:
Este comando consome os "changesets", atualiza a versão nos package.json e gera os CHANGELOG.md.

npx changeset version

Publique os pacotes:
(Se aplicável) Publica os pacotes que foram atualizados no registro npm.

npx changeset publish

Remote Caching
Para acelerar ainda mais os builds, este projeto está configurado para usar o Remote Caching da Vercel.

Faça o login na sua conta Vercel:

npx turbo login

Vincule o projeto ao Remote Cache:

npx turbo link

Links Úteis
Para saber mais sobre as ferramentas utilizadas:

Tasks no Turborepo

Caching no Turborepo

Remote Caching no Turborepo

Documentação do Changesets

Documentação do Vite

Documentação do Flask
