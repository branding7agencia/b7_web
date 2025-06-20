# ADR-02: Como Criar uma Nova Aplicação backend no Monorepo

- **Status**: Aceito
- **Data**: 2025-06-20
- **Autores**: dev Tárcio Teixeira

## Contexto e Problema

Para manter a consistência e acelerar o desenvolvimento de novas features ou produtos, precisamos de um processo padronizado para criar novas aplicações (apps) dentro do nosso monorepo.
Este guia define o passo a passo para configurar uma nova aplicação.

**Configurar uma aplicação em python:**

- **APIs RESTfull**: Flask
- **ORM (Object-Relational Mapper)**: Flask-SQLAlchemy
- **Banco de dados (desenvolvimento)**: SQLite (Já vem com python)
- **Banco de dados (produção)**: PostegreSQL ou MySQL
- **Gerenciamento de senhas (Hashing)**: Flask-Bcrypt
- **Autenticação (gerenciamento de tokens)**: Flask-JWT-Extended
- **Validação de dados com python**: Pydantic
- **Lidando co informações sensivéis**: Python-dotenv
- **Ambiente virtual**: Python-venv (já vem com o python)

## Tutorial: Criando um novo app frontend

## Passo 1: Estrutural inicial

- **Crie uma nova pasta para sua aplicação dentro de apps/. A estrutura inicial recomendada é:**
apps/
|-- nome-da-sua-api/
|     ├── app/
│     |   |-- __init__.py      # Inicializa a aplicação Flask (Application Factory)
│     |   |--config.py         # Carrega as configurações do ambiente
│     |   |-- models.py        # Define os modelos do SQLAlchemy
│     |   |-- routes.py        # Define as rotas/endpoints da API
|     |         
|     |-- venv/            # Pasta do ambiente virtual
|     |-- .env             # Arquivo para variáveis de ambiente (não versionar)
|     |-- run.py           # Script para iniciar o servidor de desenvolvimento

## Passo 2: Ambiente virtual e dependências

**a. Crie o ambiente virtual** 
Navega até a pasta de sua API e execute:

# Criar o ambiente virtual
python -m venv venv

# Ativar no Linux/macOS
source venv/bin/activate

# Ativar no Windows
.\venv\Scripts\activate

**b. Instale as dependências**
``
pip install Flask Flask-SQLAlchemy Flask-Bcrypt Flask-JWT-Extended pydantic python-dotenv
``

**c. Crie o arquivo requirements.txt**
Após a instalação, gere o arquivo de dependências para o projeto. 

``
pip freeze > requirements.txt
``

## Passo 3: Configuração inicial dos arquivos
Copie os bloos de código abaixo para criar a base da aplicação

**a. .env (na raiz da api)**
Arquivo para informações sensíveis 

# URL de conexão com o banco de dados. Para SQLite, é o caminho do arquivo.
DATABASE_URL="sqlite:///project.db"

# Chave secreta para o JWT. Gere uma chave segura para produção.
JWT_SECRET_KEY="sua-chave-secreta-super-forte"

**b. app/config.py**
Carrega as configurações a partir do arquivo .env

# URL de conexão com o banco de dados. Para SQLite, é o caminho do arquivo.
DATABASE_URL="sqlite:///project.db"

# Chave secreta para o JWT. Gere uma chave segura para produção.
JWT_SECRET_KEY="sua-chave-secreta-super-forte"

**c. app/__init__.py**
Cria a aplicação usando o padrão "Application Factory".

from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from flask_bcrypt import Bcrypt
from flask_jwt_extended import JWTManager
from .config import Config

# Inicializa as extensões
db = SQLAlchemy()
bcrypt = Bcrypt()
jwt = JWTManager()

def create_app():
    app = Flask(__name__)
    app.config.from_object(Config)

    # Conecta as extensões com a aplicação Flask
    db.init_app(app)
    bcrypt.init_app(app)
    jwt.init_app(app)

    # Importa e registra as rotas
    from .routes import api_bp
    app.register_blueprint(api_bp, url_prefix='/api')

    return app

**d. app/routes.py**
Define um endpoint básico de teste

from flask import Blueprint, jsonify

# Cria um "Blueprint" para organizar as rotas
api_bp = Blueprint('api', __name__)

@api_bp.route('/health', methods=['GET'])
def health_check():
    """Endpoint para verificar se a API está no ar."""
    return jsonify({"status": "ok"}), 200

**e. run.py (na raiz da api)**
Script para executar o servidor.

from app import create_app

app = create_app()

if __name__ == '__main__':
    # O debug=True reinicia o servidor automaticamente após alterações
    app.run(debug=True)

## Passo 4: Como executar a aplicação 
Com o ambiente virtual (venv) ativo e dentro da pasta da sua API (apps/nome-da-sua-api), inicie o servidor de desenvolvimento com o comando.

``
python run.py
``

Sua API agora vai está rodando em 

