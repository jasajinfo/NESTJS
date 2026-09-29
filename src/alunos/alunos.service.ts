import {
  Injectable,
  NotFoundException,
} from '@nestjs/common';

import {
  CreateAlunoDto,
} from './dto/create-aluno.dto.js';

import {
  UpdateAlunoDto,
} from './dto/update-aluno.dto.js';

@Injectable()
export class AlunosService {
  private alunos = [
    {
      id: 1,
      nome: 'Ana',
      curso: 'Sistemas de Informação',
    },
    {
      id: 2,
      nome: 'Carlos',
      curso: 'Ciência da Computação',
    },
  ];

  findAll() {
    return this.alunos;
  }

  findById(id: number) {
    const aluno = this.alunos.find(
      (aluno) => aluno.id === id,
    );

    if (!aluno) {
      throw new NotFoundException(
        'Aluno não encontrado',
      );
    }

    return aluno;
  }

  create(data: CreateAlunoDto) {
    const novoAluno = {
      id: this.alunos.length + 1,
      nome: data.nome,
      curso: data.curso,
    };

    this.alunos.push(novoAluno);

    return novoAluno;
  }

  update(
    id: number,
    data: UpdateAlunoDto,
  ) {
    const aluno = this.findById(id);

    aluno.nome = data.nome;
    aluno.curso = data.curso;

    return aluno;
  }

  delete(id: number) {
    this.findById(id);

    const index = this.alunos.findIndex(
      (aluno) => aluno.id === id,
    );

    this.alunos.splice(index, 1);
  }
}