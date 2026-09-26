# API NestJS com MySQL

Projeto desenvolvido em **NestJS** com integração ao banco de dados **MySQL**.

## Tecnologias

- NestJS
- TypeScript
- MySQL
- mysql2

## Funcionalidades

CRUD de alunos:

- Cadastrar
- Listar
- Buscar por ID
- Atualizar
- Excluir

## Executar o projeto

Instale as dependências:

```bash
npm install
```

Inicie a aplicação:

```bash
npm run start:dev
```

A API estará disponível em:

```text
http://localhost:3000
```

## Endpoints

```text
GET    /alunos
GET    /alunos/:id
POST   /alunos
PUT    /alunos/:id
DELETE /alunos/:id
```

## Estrutura

```text
Controller → Service → Repository → DatabaseService → MySQL
```

Projeto desenvolvido para prática de **NestJS, API REST e persistência de dados com MySQL**.
