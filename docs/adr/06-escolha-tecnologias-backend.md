
# ADR-XX: Escolha das Tecnologias para o Backend

- **Status**: Aceito  
- **Data**: 20/06/2025  
- **Autores**: Tárcio Teixeira  

---

## Contexto

Dentro do nosso monorepo, optamos por padronizar também a stack tecnológica utilizada em todas as aplicações **backend**. O objetivo é garantir consistência, facilidade de manutenção e um processo de onboarding mais rápido para novos desenvolvedores.

O stack backend escolhido atende as necessidades de APIs RESTful simples e de rápida implementação, além de ser de fácil aprendizado e contar com boa documentação.

---

## Decisão Tomada

Todas as novas aplicações **backend** dentro do monorepo devem ser desenvolvidas com a seguinte stack tecnológica:

| Categoria                           | Tecnologia Escolhida      |
|-------------------------------------|---------------------------|
| **Framework de API**                | Flask                     |
| **ORM (mapeamento objeto-relacional)** | Flask-SQLAlchemy        |
| **Banco de Dados (desenvolvimento)** | SQLite                    |
| **Banco de Dados (produção)**       | PostgreSQL ou MySQL       |
| **Hashing de senhas**               | Flask-Bcrypt              |
| **Autenticação por token (JWT)**    | Flask-JWT-Extended        |
| **Validação de dados**              | Pydantic                  |
| **Gerenciamento de variáveis de ambiente** | python-dotenv          |
| **Ambiente virtual**                | Python-venv (padrão Python)|

---

## Motivações da Escolha

- **Flask**: Leve, flexível e com curva de aprendizado rápida. Ideal para APIs RESTful.
- **Flask-SQLAlchemy**: Integração simples com bancos relacionais e uso familiar do padrão ORM.
- **SQLite**: Banco leve e sem necessidade de configuração para desenvolvimento local.
- **PostgreSQL/MySQL**: Opções robustas e amplamente utilizadas em produção.
- **Flask-Bcrypt**: Solução simples e segura para hashing de senhas.
- **Flask-JWT-Extended**: Biblioteca consolidada para autenticação baseada em JWT.
- **Pydantic**: Excelente para validação de dados de entrada com tipagem forte.
- **python-dotenv**: Facilita o uso de variáveis de ambiente, essencial para segurança.
- **Python-venv**: Mantém o ambiente isolado e organizado.

---

## Consequências

- Todas as novas aplicações backend devem seguir o processo descrito no guia:  
👉 [`guias e tutoriais/como-criar-um-app/02-como-criar-aplicação-back.md`](../guias%20e%20tutoriais/como-criar-um-app/02-como-criar-aplicação-back.md)

- Qualquer mudança futura na stack backend deverá ser formalizada com uma nova ADR.

- As equipes de desenvolvimento devem seguir a estrutura de pastas e os padrões de configuração definidos no guia.

---

## Links Relacionados

- Guia de Criação de Aplicação Backend: [`02-como-criar-aplicação-back.md`](../guias%20e%20tutoriais/como-criar-um-app/02-como-criar-aplicação-back.md)
- ADR sobre estrutura geral do monorepo (caso exista)
