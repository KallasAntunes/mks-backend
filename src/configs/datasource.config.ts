import 'reflect-metadata';
import { DataSource } from 'typeorm';
import { Movie } from '../movies/movies.entity';

export const AppDataSource = new DataSource({
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'pguser',
  password: 'pgpassword',
  database: 'nestjs',
  entities: [Movie],
  synchronize: true,
  logging: false,
});

AppDataSource.initialize();
