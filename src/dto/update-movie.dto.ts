import {
  MaxLength,
  IsDateString,
  IsPositive,
  IsOptional,
} from 'class-validator';

export class UpdateMovieDto {
  @IsOptional()
  @MaxLength(200, {
    message: 'O título deve ter menos de 200 caracteres',
  })
  title: string;

  @IsOptional()
  @MaxLength(1000, {
    message: 'A descrição do filme deve ter menos de 1000 caracteres',
  })
  description: string;

  @IsOptional()
  @IsDateString(
    {},
    {
      message: 'A data de lançamento deve ser uma data no formato aaaa-mm-dd',
    },
  )
  release_date: string;

  @IsOptional()
  @IsPositive({
    message: 'A duração deve ser um número positivo',
  })
  length: number;
}
