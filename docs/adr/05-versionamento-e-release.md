# ADR-002: Escolha do NPM como Gerenciador de Pacotes

- **Status:** Aceito
- **Data:** 2025-06-10
- **Decisor(es):** dev Tárcio Teixeira

**Contexto e Problema**
los pacotes publicáveis, o processo de decidir quais pacotes precisam de uma nova versão, atualizar seus package.json, gerar CHANGELOGs e publicá-los no registro (npm) é complexo, manual e extremamente propenso a erros humanos. Fazer isso sem uma ferramenta dedicada pode levar a versões incorretas, changelogs incompletos ou falhas na publicação.

**Decisão**
Adotamos a ferramenta Changesets para gerenciar todo o nosso fluxo de trabalho de versionamento e publicação de pacotes.

O fluxo de trabalho com Changesets será o seguinte:

Ao fazer uma alteração em um ou mais pacotes, o desenvolvedor executa o comando npx changeset add.

Este comando interativo gera um pequeno arquivo markdown (.md) descrevendo a mudança (patch, minor ou major) e o que foi alterado.

Esses arquivos são enviados para o repositório junto com o código.

Um processo automatizado (via GitHub Actions) ou manual consome esses arquivos com npx changeset version, atualizando automaticamente as versões dos pacotes nos package.json e compilando os CHANGELOG.md detalhados.

Finalmente, o comando npx changeset publish publica no npm apenas os pacotes que foram atualizados.

**Consequências**

**Positivas**
Clareza e Rastreabilidade: Cada mudança que exige uma nova versão é documentada em um arquivo de changeset, servindo como uma "intenção de lançamento".

Automação: O processo de versionamento e geração de changelog é totalmente automatizado, eliminando erros manuais.

Changelogs de Qualidade: Os CHANGELOG.md são gerados automaticamente a partir das descrições fornecidas pelos desenvolvedores, garantindo que sejam informativos e completos.

Publicação Segura: Apenas os pacotes que realmente sofreram alterações são publicados.

**Negativas**
Passo Adicional no Fluxo: Exige que os desenvolvedores se lembrem de executar npx changeset add como parte de seu fluxo de trabalho ao fazer alterações relevantes.

Curva de Aprendizagem: Novos membros da equipe precisarão ser treinados sobre o que são changesets e como usá-lo
