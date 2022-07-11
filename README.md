# Mks Backend Challenge

Essa aplicação é uma API REST com um CRUD para um catálogo de filmes feita com TypeScript, Nest.js, TypeORM, Swagger, PostgreSQL e Docker.

## Instalação

```bash

$ npm install

```

## Rodar o Projeto

```bash

# development

$ npm run start



# watch mode

$ npm run start:dev



# production mode

$ npm run start:prod

```

# Checar Documentação e Testar

`GET /api`

    curl -i -H 'Accept: application/json' http://localhost:3000/api

# Tecnologias utilizadas

- **TypeScript:** Linguagem de programação usada
- **Nest.js:** Framework Typescript utilizada para APIs REST
- **TypeORM:** Utilizado para mapear os objetos com suas colunas no banco de dados.
- **Swagger:** Utilizado para documentar o código
- **PostgreSQL:** Banco de dados relacional onde os dados são armazenados
- **Docker:** Utilizado para gerar o ambiente da API em um container
