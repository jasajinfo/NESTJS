import { Injectable, OnModuleDestroy } from '@nestjs/common';
import { PrismaClient } from '../generated/prisma/client.js';
import { PrismaMariaDb } from '@prisma/adapter-mariadb';

@Injectable()
export class PrismaService
  extends PrismaClient
  implements OnModuleDestroy
{
  constructor() {
    const adapter = new PrismaMariaDb({
      host: process.env.DB_HOST || 'localhost',
      port: Number(process.env.DB_PORT || 3308),
      user: process.env.DB_USER || 'root',
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME || 'escola',
      connectionLimit: 5,
    });

    super({ adapter });
  }

  async onModuleDestroy() {
    await this.$disconnect();
  }
}