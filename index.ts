import { ConfigService } from '@nestjs/config';

import console from 'console';

import { DataSource } from 'typeorm';

const configService = new ConfigService();

console.log(configService);
console.log("process.env: ", process.env);
//undefined
console.log(configService.get<string>('PG_DATABASE_URL'));

export const connectionSource = new DataSource({
  type: 'postgres',
  logging: true,
  url: configService.get<string>('PG_DATABASE_URL'),
});