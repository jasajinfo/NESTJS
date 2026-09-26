import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Professor } from './professor.entity.js';

@Injectable()
export class ProfessoresService {
  constructor(
    @InjectRepository(Professor)
    private readonly professoresRepository: Repository<Professor>,
  ) {}

  findAll(): Promise<Professor[]> {
    return this.professoresRepository.find();
  }

  async findById(id: number): Promise<Professor> {
    const professor = await this.professoresRepository.findOneBy({ id });

    if (!professor) {
      throw new NotFoundException('Professor não encontrado');
    }

    return professor;
  }

  async create(
    nome: string,
    disciplina: string,
  ): Promise<Professor> {
    const professor = this.professoresRepository.create({
      nome,
      disciplina,
    });

    return this.professoresRepository.save(professor);
  }

  async update(
    id: number,
    nome: string,
    disciplina: string,
  ): Promise<Professor> {
    const professor = await this.findById(id);

    professor.nome = nome;
    professor.disciplina = disciplina;

    return this.professoresRepository.save(professor);
  }

  async remove(id: number): Promise<Professor> {
    const professor = await this.findById(id);

    await this.professoresRepository.remove(professor);

    return professor;
  }
}