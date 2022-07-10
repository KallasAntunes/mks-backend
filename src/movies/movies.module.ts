import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MoviesRepository } from './movies.repository';
import { MoviesService } from './movies.service';
import { MoviesController } from './movies.controller';

@Module({
  imports: [TypeOrmModule.forFeature([MoviesRepository])],
  providers: [MoviesService],
  controllers: [MoviesController],
})
@Module({})
export class MoviesModule {}
