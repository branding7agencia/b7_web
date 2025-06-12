# ADR-003: Estrutura de Pastas do Monorepo

- **Status:** Aceito
- **Data:** 2025-06-10
- **Decisor(es):** [dev Tárcio Teixeira]

**Contexto e problema**
Com múltiplos desenvolvedores e projetos coexistindo no monorepo, há um risco significativo de inconsistências no código. Problemas como estilos de formatação divergentes, falta de padronização na escrita de código e a não detecção de erros comuns em tempo de desenvolvimento podem comprometer a legibilidade, a manutenção e a qualidade geral do software. Precisamos de um sistema automatizado para impor padrões de qualidade.

**Decisão**
Adotamos um conjunto de três ferramentas integradas para garantir a qualidade, padronização e segurança do nosso código-fonte. Elas serão configuradas na raiz do projeto para serem aplicadas globalmente.

**ESLint**
linter de código. Sua função é analisar o código estaticamente para encontrar problemas. Ele será configurado para identificar erros de sintaxe, variáveis não utilizadas, e para garantir que o código siga as melhores práticas da linguagem, prevenindo bugs antes mesmo dos testes.

**Prettier**
Será nosso formatador de código "opinativo". Ele reformata o código automaticamente para seguir um estilo consistente (espaçamento, quebra de linha, uso de aspas, etc.). Sua adoção elimina qualquer debate sobre estilo de código na equipe, garantindo que todo o código no repositório tenha a mesma aparência.

**Typescript**
Será a base do nosso desenvolvimento. Adicionando um sistema de tipagem estática ao JavaScript, o TypeScript nos permite detectar uma vasta gama de erros em tempo de desenvolvimento, antes mesmo de o código ser executado. Isso aumenta a robustez, a segurança e melhora a experiência do desenvolvedor com auto-complete e refatoração mais inteligentes.

**Consequências**
**Positivas**
Padronização Automatizada: O código é formatado e verificado automaticamente, economizando tempo de revisão manual.

Redução de Bugs: Muitos erros comuns são pegos pelo ESLint e TypeScript antes de chegarem à fase de testes ou produção.

Melhora na Colaboração: O código se torna mais previsível e fácil de ler para todos os membros da equipe.

Manutenção Simplificada: Um código limpo e padronizado é mais fácil de entender e modificar no futuro.

**Negativas:**
Rigidez: As regras de linting podem, ocasionalmente, ser um pouco rígidas, exigindo desativação manual em casos específicos.

Configuração: Exige a manutenção dos arquivos de configuração (.eslintrc.js, .prettierrc.json, tsconfig.json).
