# 01: O que é um Pipeline de CI/CD?

## A Analogia: Uma Linha de Montagem de Software

Imagine uma moderna linha de montagem de carros. O metal bruto entra em uma ponta e um carro pronto, testado e polido sai na outra. Cada etapa da montagem é automatizada e possui rigorosos controles de qualidade. Se um robô detectar que uma porta não se encaixa perfeitamente, a linha para e um alerta é emitido imediatamente, antes que o carro continue para a pintura.

Um **Pipeline de CI/CD** é exatamente isso, mas para software. É uma linha de montagem automatizada que pega o código-fonte escrito pelos desenvolvedores e o transforma em uma aplicação funcional e implantada em produção, com testes de qualidade em cada etapa do processo.

## Os Termos Chave: CI e CD

O acrônimo CI/CD se divide em duas partes principais:

### 1. CI: Integração Contínua (Continuous Integration)

-   **O que é?** A prática de desenvolvedores mesclarem (integrarem) suas alterações de código em um repositório central várias vezes ao dia.
-   **O Objetivo:** Detectar problemas de integração o mais cedo possível.
-   **Como Funciona?** Cada vez que um novo código é enviado (em um *commit* ou *pull request*), um processo automatizado é disparado para "construir" e testar a aplicação. Se o novo código quebrar algo, a equipe é notificada imediatamente.

**No nosso projeto, a etapa de CI corresponde a:**
1.  Instalar todas as dependências (`npm install`).
2.  Verificar a qualidade e o estilo do código (`npm run lint`).
3.  Executar todos os testes automatizados (`npm test`).
4.  Construir os projetos para garantir que não há erros de compilação (`npm run build -ws`).

Se todas essas etapas passarem, temos alta confiança de que o código tem qualidade e pode ser integrado à branch principal.

### 2. CD: Entrega e Implantação Contínuas (Continuous Delivery & Deployment)

-   **O que é?** É a fase seguinte à CI. Depois que o código foi integrado e passou em todos os testes, a etapa de CD cuida de prepará-lo e enviá-lo para os usuários.

Existem dois "sabores" de CD:

-   **Entrega Contínua (Continuous Delivery):** A pipeline automatiza a preparação da versão final da aplicação (o "pacote de implantação"). Essa versão fica pronta para ser implantada em produção com um **clique manual**. Essa abordagem dá à equipe o controle sobre *quando* lançar a nova versão.

-   **Implantação Contínua (Continuous Deployment):** Este é o nível mais avançado. Se o código passar por todas as etapas de CI, ele é **implantado automaticamente em produção**, sem qualquer intervenção humana. Isso exige uma suíte de testes extremamente robusta e confiável.

**Para nosso projeto, começaremos com a Entrega Contínua (manual-click-to-deploy), que já é um avanço imenso.**

## Como o CI/CD se Aplica ao Nosso Monorepo

A grande vantagem e o desafio de um monorepo é que temos múltiplos projetos (`apps` e `packages`) convivendo. Um pipeline de CI/CD inteligente não precisa reconstruir e reimplantar tudo a cada pequena alteração.

**Nossa Estratégia:**

1.  **Gatilhos**: O pipeline será acionado em cada `push` para a branch `main` ou em cada `pull request` aberto.
2.  **Validação (CI)**: Em um Pull Request, rodaremos os testes e o lint de **todo o monorepo** para garantir que uma mudança em um pacote compartilhado (como o `@b7-web/ui-kit`) não quebrou uma aplicação que o consome.
3.  **Implantação (CD)**: Quando um Pull Request for aprovado e mesclado na `main`, o pipeline irá identificar **quais aplicações foram afetadas** pela mudança e implantará apenas elas. (Ferramentas como Nx ou Turborepo têm isso de forma nativa, mas é possível criar scripts para essa detecção).

### Exemplo de um Pipeline no GitHub Actions

Este é um exemplo prático de como nosso pipeline funciona. Ele define os passos para validar o código e, em seguida, um passo para implantar uma de nossas aplicações (ex: a `landing-page`) em um serviço como a Vercel.

**.github/workflows/ci-cd.yml**
```yml
name: Monorepo CI/CD

on:
  push:
    branches: [ main ]
  pull_request:
    branches: [ main ]

jobs:
  # --- Etapa de CI: Validar a Saúde do Código ---
  validate:
    name: Validate Code (Lint & Test)
    runs-on: ubuntu-latest
    steps:
      - name: Checkout Repository
        uses: actions/checkout@v4

      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: 20
          cache: 'npm'

      - name: Install Dependencies
        run: npm install

      - name: Run Lint
        run: npm run lint

      - name: Run Tests
        run: npm test

  # --- Etapa de CD: Implantar a Aplicação em Produção ---
  deploy-landing-page:
    name: Deploy Landing Page
    needs: validate # Só roda se o job 'validate' passar
    runs-on: ubuntu-latest
    # Roda apenas quando há um push na branch main
    if: github.ref == 'refs/heads/main' && github.event_name == 'push'
    
    steps:
      - name: Checkout Repository
        uses: actions/checkout@v4

      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: 20
          cache: 'npm'
      
      - name: Install Dependencies
        run: npm install

      # Exemplo de deploy para a Vercel
      - name: Deploy to Vercel
        uses: amondnet/vercel-action@v20
        with:
          vercel-token: ${{ secrets.VERCEL_TOKEN }}
          vercel-org-id: ${{ secrets.VERCEL_ORG_ID }}
          vercel-project-id: ${{ secrets.VERCEL_PROJECT_ID_LANDING_PAGE }}
          # A Vercel é inteligente e o build é feito no ambiente dela
          # Para outros provedores, você adicionaria um passo de build aqui:
          # run: npm run build -w @b7-web/landing-page
```

## Benefícios de um Pipeline de CI/CD

-   **Velocidade:** Permite entregar novas features e correções de bugs aos usuários de forma muito mais rápida.
-   **Confiabilidade:** Reduz drasticamente a chance de erros humanos no processo de deploy e garante que bugs sejam pegos pelos testes automatizados antes de chegarem à produção.
-   **Consistência:** Garante que todo código passa pelo mesmo processo de validação e implantação.
-   **Produtividade:** Libera os desenvolvedores da tarefa manual e estressante de fazer deploy, permitindo que foquem em criar valor para o produto.

```