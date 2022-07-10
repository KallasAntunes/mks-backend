import { Movie } from '../movies/movies.entity';

export class ReturnMovieDto {
  movie: Movie;
  message: string;
}
