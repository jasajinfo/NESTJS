# API de Alunos — NestJS + MySQL

Projeto desenvolvido em **NestJS** para implementação de uma API REST de gerenciamento de alunos, utilizando **MySQL** como banco de dados.

O projeto aplica conceitos de organização em camadas, DTOs, validação de dados e tratamento de erros.

## Tecnologias utilizadas

- Node.js
- NestJS
- TypeScript
- MySQL
- mysql2
- Docker
- class-validator
- class-transformer

## Estrutura do projeto

```text
src/
├── app.module.ts
├── main.ts
│
├── database/
│   ├── database.module.ts
│   └── database.service.ts
│
└── alunos/
    ├── dto/
    │   ├── create-aluno.dto.ts
    │   └── update-aluno.dto.ts
    │
    ├── alunos.module.ts
    ├── alunos.controller.ts
    ├── alunos.service.ts
    └── alunos.repository.ts
```

## Arquitetura

A aplicação utiliza a seguinte organização:

```text
Requisição HTTP
      ↓
ValidationPipe
      ↓
DTO
      ↓
Controller
      ↓
Service
      ↓
Repository
      ↓
DatabaseService
      ↓
MySQL
```

### Controller

Responsável por receber as requisições HTTP e direcioná-las para o Service.

### DTO

Responsável por definir e validar os dados recebidos pela API.

### Service

Responsável pelas regras e pela coordenação da aplicação.

### Repository

Responsável pelo acesso aos dados e execução dos comandos SQL.

### DatabaseService

Responsável pelo gerenciamento da conexão com o banco MySQL.

## Validação de dados

O projeto utiliza:

```bash
npm install class-validator class-transformer
```

Os DTOs permitem validar os dados antes que sejam processados pela aplicação.

Exemplo:

```typescript
export class CreateAlunoDto {
  @IsString()
  @IsNotEmpty()
  @MaxLength(100)
  nome: string;

  @IsString()
  @IsNotEmpty()
  @MaxLength(100)
  curso: string;
}
```

A validação global é configurada através do `ValidationPipe`.

```typescript
app.useGlobalPipes(
  new ValidationPipe({
    whitelist: true,
    transform: true,
  }),
);
```

## Endpoints

| Método | Endpoint | Função |
|---|---|---|
| GET | `/alunos` | Listar alunos |
| GET | `/alunos/:id` | Buscar aluno por ID |
| POST | `/alunos` | Cadastrar aluno |
| PUT | `/alunos/:id` | Atualizar aluno |
| DELETE | `/alunos/:id` | Excluir aluno |

## Códigos HTTP

A API utiliza códigos HTTP adequados para cada operação:

```text
200 OK
201 Created
204 No Content
400 Bad Request
404 Not Found
```

Quando um aluno não é encontrado, a aplicação utiliza:

```typescript
throw new NotFoundException('Aluno não encontrado');
```

## Instalação

Clone o repositório e instale as dependências:

```bash
git clone <URL-DO-REPOSITORIO>
cd <NOME-DO-PROJETO>
npm install
```

## Variáveis de ambiente

Crie o arquivo `.env`:

```env
PORT=3000

DB_HOST=localhost
DB_PORT=3306
DB_USER=root
DB_PASSWORD=sua_senha
DB_NAME=escola
```

O arquivo `.env` não deve ser enviado para o GitHub.

Adicione ao `.gitignore`:

```gitignore
.env
```

## Executando o projeto

Para iniciar em modo de desenvolvimento:

```bash
npm run start:dev
```

A API ficará disponível, por padrão, em:

```text
http://localhost:3000
```

## Exemplos de uso

### Cadastrar aluno

```http
POST /alunos
```

```json
{
  "nome": "Maria",
  "curso": "ADS"
}
```

### Consultar alunos

```http
GET /alunos
```

### Consultar aluno por ID

```http
GET /alunos/1
```

### Atualizar aluno

```http
PUT /alunos/1
```

```json
{
  "nome": "Maria da Silva",
  "curso": "Análise e Desenvolvimento de Sistemas"
}
```

### Excluir aluno

```http
DELETE /alunos/1
```

## Conceitos aplicados

Durante o desenvolvimento foram utilizados conceitos importantes do NestJS:

- Modules;
- Controllers;
- Services;
- Providers;
- Dependency Injection;
- Repository;
- DTOs;
- ValidationPipe;
- ParseIntPipe;
- NotFoundException;
- ConfigModule e ConfigService;
- conexão com MySQL;
- SQL parametrizado;
- tratamento adequado dos códigos HTTP.

## Boas práticas

O projeto procura manter responsabilidades separadas:

```text
Controller → HTTP
DTO → validação
Service → regras da aplicação
Repository → SQL e persistência
DatabaseService → conexão com MySQL
```

Também são utilizadas variáveis de ambiente para evitar que senhas e credenciais sejam inseridas diretamente no código.

## Autor

**José Antônio de Souza Amador Júnior**

Projeto acadêmico desenvolvido para estudo de **NestJS, APIs REST, TypeScript e integração com banco de dados MySQL**.
