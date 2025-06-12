# 🚀 Guia de Configuração do Ambiente de Desenvolvimento

Bem-vindo(a) ao projeto! Este guia contém todos os passos necessários para configurar o ambiente de desenvolvimento localmente. Siga as instruções na ordem apresentada para garantir uma configuração sem erros.

## 1. Pré-requisitos

Antes de começar, garanta que você tenha as seguintes ferramentas instaladas na sua máquina.

- **Git:** Essencial para controle de versão.
- **Node.js:** O projeto requer a versão 18 ou superior, conforme definido no `package.json`. Ao instalar o Node.js, o `npm` (nosso gerenciador de pacotes) já será instalado junto.
  - Você pode baixar a versão mais recente do Node.js [aqui](https://nodejs.org/en/download).

## 2. Passos para a Instalação

Com os pré-requisitos atendidos, siga os passos abaixo.

### Passo 2.1: Clonar o Repositório

Use o Git para clonar este repositório para a sua máquina local e, em seguida, navegue para a pasta do projeto.

```bash
# Clone usando SSH (recomendado)
git git@github.com:branding7agencia/b7_web.git

# Ou clone usando HTTPS
git clone https://github.com/branding7agencia/b7_web.git

cd b7_web
```

### Passo 2.2: Instalar as Dependências

Agora, instale todas as dependências do monorepo. O `npm` irá ler os `workspaces` definidos no `package.json` e instalar as dependências de todos os `apps` e `packages`.

```bash
npm install
```

_Este comando pode levar alguns minutos na primeira vez que for executado._

### Passo 2.3: Configurar Variáveis de Ambiente

Para que as aplicações funcionem corretamente, pode ser necessário configurar variáveis de ambiente (como chaves de API, URLs de banco de dados, etc.).

1.  **Crie seu arquivo de ambiente local:** Se existir um arquivo de exemplo `.env.example` na raiz ou dentro de alguma das `apps`, copie-o para um novo arquivo chamado `.env.local`. Este arquivo é pessoal e não será enviado para o repositório.

    ```bash
    # Exemplo, se o arquivo estiver na app 'web'
    cp apps/web/.env.example apps/web/.env.local
    ```

2.  **Preencha as variáveis:** Abra o arquivo `.env.local` que você acabou de criar e preencha os valores necessários.

## 3. Rodando o Projeto

Para iniciar todas as aplicações no modo de desenvolvimento, execute o seguinte comando na raiz do projeto:

```bash
npm run dev
```

Este comando usa o script `dev` do `package.json`, que por sua vez executa `turbo run dev` para iniciar os servidores de todas as aplicações de forma otimizada e paralela.

## 4. Comandos Úteis

Todos os scripts principais são executados com `npm run` a partir da raiz do projeto.

- **Buildar o projeto para produção:**
  ```bash
  npm run build
  ```
- **Rodar o linter para checar a qualidade do código:**
  ```bash
  npm run lint
  ```
- **Formatar o código com o Prettier:**
  ```bash
  npm run format
  ```
- **Checar os tipos do TypeScript:**
  ```bash
  npm run check-types
  ```

Se tudo ocorreu bem, seu ambiente está 100% configurado e pronto para o desenvolvimento!
