
# ADR-XX: Escolha das Tecnologias para o Frontend

- **Status**: Aceito  
- **Data**: 20/06/2025  
- **Autores**: Tárcio Teixeira  

---

## Contexto

O projeto utiliza um monorepo para centralizar múltiplas aplicações e pacotes compartilhados. Como parte da padronização, foi necessário definir um stack tecnológico único para todas as aplicações **frontend** dentro desse monorepo.

Essa decisão tem como objetivo:

- Garantir consistência entre as aplicações
- Facilitar o reuso de código e componentes
- Reduzir a curva de aprendizado para novos desenvolvedores
- Facilitar a manutenção, o build e o deploy das aplicações frontend

---

## Decisão Tomada

Todas as novas aplicações **frontend** do monorepo devem ser desenvolvidas com a seguinte stack tecnológica:

| Categoria                    | Tecnologia Escolhida        |
|------------------------------|-----------------------------|
| **Framework/UI Library**     | React                      |
| **Build Tool**               | Vite                       |
| **Linguagem e Tipagem**      | TypeScript                 |
| **Estilização**              | Styled Components          |
| **Roteamento**               | React Router DOM           |
| **Gerenciamento de Estado**  | Redux com Redux Toolkit    |
| **Gerenciador de Pacotes**   | NPM com Workspaces         |

---

## Motivações da Escolha

- **React**: Ampla adoção no mercado, fácil de encontrar desenvolvedores, grande comunidade, variedade de bibliotecas complementares.
- **Vite**: Alta performance no build e desenvolvimento local, integração nativa com TypeScript e React.
- **TypeScript**: Tipagem forte, maior segurança no desenvolvimento e melhor experiência com IDEs.
- **Styled Components**: Permite estilização com escopo local ao componente, facilita o uso de temas, e mantém a estilização junto ao código dos componentes.
- **React Router DOM**: Gerenciamento de rotas declarativo, com suporte a rotas aninhadas e lazy-loading.
- **Redux Toolkit**: Simplifica a configuração do Redux, com foco em boas práticas e redução de boilerplate.
- **NPM Workspaces**: Facilita o gerenciamento de dependências entre os pacotes e apps do monorepo.

---

## Consequências

- Todas as novas aplicações frontend devem seguir o processo descrito no guia:  
👉 [`guias e tutoriais/como-criar-um-app/01-como-criar-uma-aplicação-frontend.md`](../guias%20e%20tutoriais/como-criar-um-app/01-como-criar-uma-aplicação-frontend.md)

- Mudanças futuras nesta stack precisam passar por nova decisão formal (nova ADR).

- Equipes devem seguir as convenções de estrutura de pastas, tipagem, estilização e roteamento descritas no guia.

---

## Links Relacionados

- Guia de Criação de Aplicação Frontend: [`01-como-criar-uma-aplicação-frontend.md`](../guias%20e%20tutoriais/como-criar-um-app/01-como-criar-uma-aplicação-frontend.md)
- ADR sobre estrutura geral do monorepo (caso exista)
