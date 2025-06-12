# 03: Processo de Release e Versionamento

## O Problema: O Caos das Versões

À medida que nosso monorepo cresce, com múltiplos pacotes (`ui-kit`, `hooks`) e aplicações (`landing-page`, `painel-admin`) que dependem uns dos outros, surgem perguntas complexas:

- Se eu corrigir um bug no `@b7-web/ui-kit`, qual deve ser a nova versão dele?
- Como a `landing-page`, que usa o `ui-kit`, "sabe" que precisa usar essa nova versão?
- Como comunicamos para o resto da equipe exatamente _o que_ mudou nessa nova versão?

Tentar gerenciar isso manualmente é uma receita para o caos, com versões inconsistentes, changelogs desatualizados e bugs de integração. Precisamos de um processo formal e automatizado.

## A Base: Versionamento Semântico (SemVer)

A fundação de qualquer processo de release é o **Versionamento Semântico**. É um padrão simples que dá significado aos números de versão de um pacote. Toda versão segue o formato `MAJOR.MINOR.PATCH`.

- **PATCH** (`1.0.x` → `1.0.1`): Para correções de bugs que são retrocompatíveis.

  - _Tradução:_ "Corrigimos um problema. Você pode atualizar com segurança, nada vai quebrar."

- **MINOR** (`1.0.1` → `1.1.0`): Para novas funcionalidades que são retrocompatíveis.

  - _Tradução:_ "Adicionamos coisas novas. Você pode atualizar para usá-las e seu código antigo continuará funcionando."

- **MAJOR** (`1.1.0` → `2.0.0`): Para mudanças que quebram a compatibilidade (`breaking changes`).
  - _Tradução:_ "Fizemos uma mudança fundamental. Se você atualizar, precisará ajustar seu código para que ele volte a funcionar."

Adotar o SemVer é o primeiro passo para uma comunicação clara sobre o impacto de cada mudança em nossos pacotes.

## A Estratégia: Versionamento Independente com "Changesets"

Em um monorepo, existem duas formas de versionar pacotes:

1.  **Versão Fixa/Travada:** Todos os pacotes têm a mesma versão. Uma mudança em qualquer lugar atualiza a versão de todos. Simples, mas impreciso.
2.  **Versão Independente:** Cada pacote tem sua própria versão e ciclo de vida. É mais preciso e a abordagem que adotaremos.

Para gerenciar o versionamento independente de forma automática e eficiente, usaremos uma ferramenta chamada **Changesets**. Ela foi criada especificamente para monorepos e automatiza o processo de versionamento, a atualização de changelogs e a publicação de pacotes.

### Como Funciona o Fluxo com Changesets

O fluxo de trabalho é simples, colaborativo e se integra perfeitamente ao nosso processo de Pull Request.

**Passo 1: O Desenvolvedor Faz uma Mudança**
Um desenvolvedor corrige um bug no componente `Button` do pacote `@b7-web/ui-kit`.

**Passo 2: O Desenvolvedor Declara a "Intenção de Release"**
Antes de fazer o commit, o desenvolvedor roda um comando na raiz do projeto:

```bash
npx changeset add
```

A ferramenta faz três perguntas simples:

1.  Quais pacotes essa mudança afeta? (Ele sugere `@b7-web/ui-kit`).
2.  Qual o tipo de mudança? (O desenvolvedor escolhe `PATCH`, pois foi um bug fix).
3.  Qual a mensagem para o changelog? (O desenvolvedor escreve: "Corrige a cor do texto do Botão quando desabilitado").

Isso cria um pequeno arquivo Markdown na pasta `.changeset/` com essas informações. Esse arquivo é comitado junto com o código.

**Passo 3: Revisão e Merge do Pull Request**
O Pull Request é criado contendo tanto a alteração no código quanto o arquivo do changeset. A equipe revisa e aprova. Ao ser mesclado na `main`, a "intenção de release" também é mesclada.

**Passo 4: A Magia do Versionamento (O "Release PR")**
Periodicamente (ou a cada merge na `main`, via CI), um mantenedor ou um robô executa o comando:

```bash
npx changeset version
```

O Changesets então:

1.  Encontra todos os arquivos de "intenção" na pasta `.changeset/`.
2.  **Atualiza a versão** no `package.json
