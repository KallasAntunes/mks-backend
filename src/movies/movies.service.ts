import { CreateMovieDto } from '../dto/create-movie.dto';
import { UpdateMovieDto } from '../dto/update-movie.dto';
import { Movie } from './movies.entity';
import { MoviesRepository } from './movies.repository';

export class MoviesService {
  constructor(private moviesRepository: MoviesRepository) {
    this.moviesRepository = new MoviesRepository();
  }

  async createMovie(createMovieDto: CreateMovieDto): Promise<Movie> {
    return this.moviesRepository.createMovie(createMovieDto);
  }

  async getMovies(limit: number): Promise<Movie[]> {
    return this.moviesRepository.getMovies(limit);
  }

  async getMovieById(id: string): Promise<Movie> {
    return this.moviesRepository.getMovieById(id);
  }

  async updateMovie(
    id: string,
    updateMovieDto: UpdateMovieDto,
  ): Promise<Movie> {
    return this.moviesRepository.updateMovie(id, updateMovieDto);
  }

  async deleteMovie(id: string): Promise<Movie> {
    return this.moviesRepository.deleteMovie(id);
  }
}
