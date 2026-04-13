# Node.js Dual DB Application (MySQL & MongoDB)

Esta é uma aplicação backend desenvolvida em Node.js que utiliza dois bancos de dados simultaneamente: **MySQL** (relacional) e **MongoDB** (não relacional).

## Arquitetura
A aplicação segue uma **arquitetura em camadas**:
- **Config**: Configurações de conexão com os bancos de dados.
- **Models**: Definição de esquemas (MongoDB).
- **Repositories**: Camada de acesso a dados (SQL e NoSQL).
- **Services**: Regras de negócio.
- **Controllers**: Manipulação de requisições e respostas.
- **Routes**: Definição dos endpoints da API.

## Tecnologias Utilizadas
- Node.js
- Express
- MySQL (via mysql2)
- MongoDB (via mongoose)
- Docker & Docker Compose

## Como Rodar
Certifique-se de ter o Docker e o Docker Compose instalados.

1. Clone o repositório (ou acesse a pasta do projeto).
2. Execute o comando:
   ```bash
   docker-compose up --build
   ```
3. A API estará disponível em `http://localhost:3000`.

## Endpoints da API

### Usuários (MySQL)
- `POST /api/users`: Criar usuário
- `GET /api/users`: Listar todos
- `GET /api/users/:id`: Buscar por ID
- `PUT /api/users/:id`: Atualizar usuário
- `DELETE /api/users/:id`: Deletar usuário

### Produtos (MongoDB)
- `POST /api/products`: Criar produto
- `GET /api/products`: Listar todos
- `GET /api/products/:id`: Buscar por ID
- `PUT /api/products/:id`: Atualizar produto
- `DELETE /api/products/:id`: Deletar produto
