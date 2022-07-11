import { ApiProperty } from '@nestjs/swagger';
import { Movie } from '../movies.entity';

export class ReturnMovieDto {
  @ApiProperty({ type: Movie })
  movie: Movie;
  @ApiProperty({ type: String, example: 'Filme cadastrado com sucesso' })
  message: string;
}
