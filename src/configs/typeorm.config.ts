import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export const typeOrmConfig: TypeOrmModuleOptions = {
  type: 'mysql',
  host: 'sql10.freemysqlhosting.net',
  port: 3306,
  username: 'sql10505735',
  password: 'tbzjkX6hK1',
  database: 'sql10505735',
  entities: [__dirname + '/../**/*.entity.{js,ts}'],
  synchronize: true,
};
