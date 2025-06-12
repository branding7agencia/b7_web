# 02: Código Compartilhado: O Coração do Monorepo

## O Problema: A Ilha de Código Duplicado

Imagine um cenário simples: o logo da empresa precisa ser atualizado. No modelo tradicional, um desenvolvedor precisaria abrir o projeto da `landing-page`, trocar o logo. Depois, abrir o `painel-admin`, trocar o mesmo logo. Depois, o `app-cliente`... O mesmo trabalho, repetido várias vezes. Cada projeto é uma ilha isolada, e a ponte entre eles é o "copiar e colar".

Isso viola o princípio mais fundamental da engenharia de software: **DRY (Don't Repeat Yourself - Não se Repita)**. Código duplicado não é apenas ineficiente; é perigoso. Ele gera inconsistências visuais e de comportamento, além de tornar a manutenção um pesadelo.

## A Solução: A Fábrica de Ferramentas (`packages/`)

A principal razão de ser de um monorepo é resolver este problema. Ele nos permite ter uma pasta central, que chamamos de `packages/`, que atua como uma "fábrica de ferramentas" para todas as nossas aplicações.

Qualquer código colocado dentro desta pasta é criado com a intenção de ser **reutilizável, consistente e uma fonte única da verdade**. Se o componente de `Header` com o logo da empresa vive em um pacote dentro de `packages/`, só precisamos atualizá-lo em **um único lugar** para que a mudança se reflita em todas as aplicações que o consomem.

## Como a Mágica Acontece: Workspaces e Symlinks

Quando você cria um pacote (ex: `@b7-web/ui-kit`) e o adiciona como dependência de uma aplicação (ex: `landing-page`) usando a versão `"workspace:*"`, o NPM não copia
