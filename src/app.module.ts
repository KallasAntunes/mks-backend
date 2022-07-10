import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeOrmConfig } from './configs/typeorm.config';
import { MoviesModule } from './movies/movies.module';
import { MoviesController } from './movies/movies.controller';
import { MoviesService } from './movies/movies.service';

@Module({
  imports: [TypeOrmModule.forRoot(typeOrmConfig), MoviesModule],
  controllers: [MoviesController],
  providers: [MoviesService],
})
export class AppModule {}
