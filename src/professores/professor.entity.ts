import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('professores')
export class Professor {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 100 })
  nome: string;

  @Column({ length: 100 })
  disciplina: string;
}