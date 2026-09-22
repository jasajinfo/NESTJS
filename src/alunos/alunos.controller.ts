import { Controller, Get } from '@nestjs/common';

@Controller('alunos')
export class AlunosController {
  @Get()
  listar() {
    return ['Ana', 'Bruno'];
  }
}