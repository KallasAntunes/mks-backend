import { Movie } from './movies.entity';
import { CreateMovieDto } from '../dto/create-movie.dto';
import {
  BadRequestException,
  InternalServerErrorException,
} from '@nestjs/common';
import { AppDataSource } from '../configs/datasource.config';
import { UpdateMovieDto } from '../dto/update-movie.dto';

export class MoviesRepository {
  async getMovies(limit: number): Promise<Movie[]> {
    try {
      const repository = AppDataSource.getRepository(Movie);
      return await repository.find({ take: limit });
    } catch (error) {
      throw new InternalServerErrorException(
        'Erro ao obter filmes no banco de dados',
      );
    }
  }
  async createMovie(createMovieDto: CreateMovieDto): Promise<Movie> {
    const { title, description, release_date, length } = createMovieDto;

    const movie = new Movie();
    movie.title = title;
    movie.description = description;
    movie.release_date = release_date;
    movie.length = length;
    try {
      const repository = AppDataSource.getRepository(Movie);
      return await repository.save(movie);
    } catch (error) {
      throw new InternalServerErrorException(
        'Erro ao salvar filme no banco de dados',
      );
    }
  }

  async getMovieById(id: string): Promise<Movie | null> {
    try {
      const repository = AppDataSource.getRepository(Movie);
      return await repository.findOneBy({ id });
    } catch (error) {
      throw new BadRequestException('Id Incorreto ou não encontrado');
    }
  }

  async updateMovie(
    id: string,
    updateMovieDto: UpdateMovieDto,
  ): Promise<Movie> {
    const { title, description, release_date, length } = updateMovieDto;
    try {
      const repository = AppDataSource.getRepository(Movie);
      const result = await repository
        .createQueryBuilder()
        .update({
          title,
          description,
          release_date,
          length,
        })
        .where({ id })
        .returning('*')
        .execute();

      return result.raw[0];
    } catch (error) {
      throw new BadRequestException('Id Incorreto ou não encontrado');
    }
  }

  async deleteMovie(id: string): Promise<Movie> {
    try {
      const repository = AppDataSource.getRepository(Movie);
      const result = await repository
        .createQueryBuilder()
        .delete()
        .where({ id })
        .returning('*')
        .execute();

      return result.raw[0];
    } catch (error) {
      throw new BadRequestException('Id Incorreto ou não encontrado');
    }
  }
}
