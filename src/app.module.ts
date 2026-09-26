import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';

import { AlunosModule } from './alunos/alunos.module.js';
import { DatabaseModule } from './database/database.module.js';
import { ProfessoresModule } from './professores/professores.module.js';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),

    TypeOrmModule.forRoot({
      type: 'mssql',
      host: 'localhost',
      port: 1433,
      username: 'sa',
      password: 'Nestjs@123456',
      database: 'escola',
      autoLoadEntities: true,
      synchronize: false,
      options: {
        trustServerCertificate: true,
      },
    }),

    DatabaseModule,
    AlunosModule,
    ProfessoresModule,
  ],
})
export class AppModule {}