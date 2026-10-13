import { Module } from '@nestjs/common';
import { AppController } from './app.controller.js';
import { AppService } from './app.service.js';
import { AlunosModule } from './alunos/alunos.module.js';
import { PrismaModule } from './prisma/prisma.module.js';

@Module({
  controllers: [AppController],
  providers: [AppService],
  imports: [PrismaModule, AlunosModule],
})
export class AppModule {}