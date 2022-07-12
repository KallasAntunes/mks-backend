import 'reflect-metadata';
import { DataSource } from 'typeorm';
import { Movie } from '../movies/movies.entity';

export const AppDataSource = new DataSource({
  type: 'mysql',
  host: 'sql10.freemysqlhosting.net',
  port: 3306,
  username: 'sql10505735',
  password: 'tbzjkX6hK1',
  database: 'sql10505735',
  entities: [Movie],
  synchronize: true,
  logging: false,
});

AppDataSource.initialize();
