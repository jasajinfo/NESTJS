Desenvolvimento de uma API de Alunos com NestJS, Prisma e MySQL

O projeto teve como objetivo desenvolver uma API para realizar o gerenciamento de alunos, utilizando as tecnologias NestJS, Prisma ORM e MySQL. A aplicação permite cadastrar, consultar, atualizar e excluir informações dos alunos de maneira organizada.

Inicialmente, foi realizada a configuração do ambiente de desenvolvimento, com a instalação das dependências necessárias. O banco de dados MySQL foi disponibilizado por meio do Docker, permitindo armazenar as informações dos alunos de forma permanente.

Em seguida, foi instalado e configurado o Prisma ORM, ferramenta responsável por facilitar a comunicação entre a aplicação e o banco de dados. O Prisma identificou a tabela de alunos existente no MySQL e gerou os arquivos necessários para realizar as operações de consulta e cadastro.

Na estrutura do NestJS, foram organizados os arquivos Controller, Service e Repository. O Controller ficou responsável por receber as requisições, o Service por controlar as operações da aplicação e o Repository por acessar os dados utilizando o Prisma.

Também foi criado o PrismaService, responsável por estabelecer a conexão com o MySQL. Dessa forma, os dados deixaram de ser armazenados temporariamente na memória da aplicação e passaram a ser consultados e gravados diretamente no banco de dados.

Após as configurações, foram realizados testes utilizando o PowerShell. Inicialmente, ocorreu um erro de conexão, que foi corrigido com o carregamento das variáveis de ambiente. Em seguida, a API conseguiu consultar os alunos cadastrados e realizar com sucesso o cadastro de um novo aluno.

A aplicação disponibiliza cinco operações principais: listar todos os alunos, consultar um aluno pelo identificador, cadastrar, atualizar e excluir registros. As operações de consulta e cadastro foram testadas com sucesso, enquanto a validação final das operações de atualização e exclusão permanece pendente.

Conclui-se que o projeto permitiu compreender, de forma prática, a integração entre NestJS, Prisma ORM e MySQL, demonstrando como uma API pode organizar suas funcionalidades e realizar o armazenamento permanente de informações em um banco de dados relacional.
