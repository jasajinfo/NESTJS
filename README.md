API de Alunos — NestJS

API REST simples desenvolvida com NestJS e TypeScript para demonstrar conceitos de módulos, controllers, services e injeção de dependência.

Funcionalidades
Listar alunos;
Buscar aluno por ID;
Cadastrar aluno;
Atualizar aluno;
Excluir aluno.
Como executar
npm install
npm run start:dev

A API ficará disponível em:

http://localhost:3000
Endpoints
Método	Rota	Função
GET	/alunos	Lista todos os alunos
GET	/alunos/:id	Busca um aluno
POST	/alunos	Cadastra um aluno
PUT	/alunos/:id	Atualiza um aluno
DELETE	/alunos/:id	Exclui um aluno

Exemplo de corpo para cadastro ou atualização:

{
  "nome": "Ana Silva",
  "curso": "Sistemas de Informação"
}

Os dados são armazenados temporariamente em memória e serão perdidos quando a aplicação for reiniciada.
