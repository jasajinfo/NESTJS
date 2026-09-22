import { Injectable } from '@nestjs/common';

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
}