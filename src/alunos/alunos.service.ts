import { Injectable, NotFoundException } from '@nestjs/common';
import { AlunosRepository } from './alunos.repository.js';

@Injectable()
export class AlunosService {
  constructor(
    private readonly alunosRepository: AlunosRepository,
  ) {}

  findAll() {
    return this.alunosRepository.findAll();
  }

  async findById(id: number) {
    const aluno = await this.alunosRepository.findById(id);

    if (!aluno) {
      throw new NotFoundException('Aluno não encontrado');
    }

    return aluno;
  }

  create(nome: string, curso: string) {
    return this.alunosRepository.create(nome, curso);
  }

  async update(id: number, nome: string, curso: string) {
    await this.findById(id);
    return this.alunosRepository.update(id, nome, curso);
  }

  async delete(id: number) {
    await this.findById(id);
    await this.alunosRepository.delete(id);
    return true;
  }
}
