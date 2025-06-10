# ADR-002: Escolha do NPM como Gerenciador de Pacotes

* **Status:** Aceito
* **Data:** 2025-06-09
* **Decisor(es):** [dev Tárcio Teixeira]

## Contexto e Problema

Um monorepo depende de um gerenciador de pacotes para lidar com as dependências de múltiplos projetos (`apps`) e bibliotecas (`packages`) de forma coesa. A ferramenta escolhida afeta diretamente a experiência do desenvolvedor, os tempos de instalação, a resolução de dependências e a consistência do ambiente de desenvolvimento entre os membros da equipe.

Era necessário escolher um gerenciador de pacotes padrão e garantir que todos os desenvolvedores utilizassem a mesma ferramenta e versão para evitar o clássico problema de "funciona na minha máquina".

## Decisão

Decidimos utilizar o **NPM (Node Package Manager)** como o gerenciador de pacotes padrão para este monorepo.

Para garantir a consistência, a versão exata está travada no arquivo `package.json` raiz através da propriedade `packageManager`, que força o uso da versão especificada do NPM.

```json
"packageManager": "npm@10.9.2"
```

## Racional e Consequências

A escolha pelo NPM foi baseada em sua simplicidade, estabilidade e integração com o ecossistema Node.js.

### Vantagens

* **Padrão do Ecossistema:** O NPM é o gerenciador de pacotes oficial do Node.js e vem **instalado junto com ele**. Isso simplifica radicalmente a configuração do ambiente para um novo desenvolvedor, que não precisa instalar ferramentas adicionais.
* **Maturidade e Estabilidade:** Sendo a ferramenta mais antiga e utilizada, o NPM é extremamente estável, bem documentado e possui compatibilidade máxima com todo o ecossistema JavaScript/TypeScript.
* **Suporte Robusto a Workspaces:** As versões modernas do NPM (7+) possuem suporte nativo e eficiente para a funcionalidade de `workspaces`, que é o requisito fundamental para a gestão de um monorepo.
* **Performance Competitiva:** Embora historicamente visto como mais lento, as versões recentes do NPM trouxeram melhorias drásticas de performance e cacheamento (`npm ci`), diminuindo significativamente a diferença para seus concorrentes.

### Desvantagens e Trade-offs

* **Eficiência de Disco:** Comparado ao `pnpm`, o NPM pode consumir mais espaço em disco, pois não utiliza a mesma arquitetura de links simbólicos para compartilhar dependências entre projetos. Para a escala atual do nosso projeto, este não é um fator crítico.

## Alternativas Consideradas

1.  **pnpm:** Reconhecido por sua alta performance e uso eficiente de disco. Foi considerado, mas a decisão pendeu para o NPM devido à sua simplicidade de "não precisar de instalação extra". Optamos por reduzir o número de ferramentas necessárias para iniciar no projeto.

2.  **Yarn (Classic & Berry):** Outra alternativa popular e madura. O Yarn Classic é muito similar ao NPM em funcionalidade. O Yarn Berry (v2+) introduz uma abordagem diferente (Plug'n'Play) que, embora poderosa, pode apresentar desafios de compatibilidade com algumas ferramentas e aumenta a complexidade do setup inicial. Escolhemos a abordagem mais tradicional e universal do NPM.