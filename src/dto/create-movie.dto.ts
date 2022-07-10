import {
  IsNotEmpty,
  MaxLength,
  IsDateString,
  IsPositive,
} from 'class-validator';

export class CreateMovieDto {
  @IsNotEmpty({
    message: 'Informe o título do filme',
  })
  @MaxLength(200, {
    message: 'O título deve ter menos de 200 caracteres',
  })
  title: string;

  @IsNotEmpty({
    message: 'Informe a descrição do filme',
  })
  @MaxLength(1000, {
    message: 'A descrição do filme deve ter menos de 1000 caracteres',
  })
  description: string;

  @IsNotEmpty({
    message: 'Informe a data de lançamento do filme',
  })
  @IsDateString(
    {},
    {
      message: 'A data de lançamento deve ser uma data no formato aaaa-mm-dd',
    },
  )
  release_date: string;

  @IsNotEmpty({
    message: 'Informe a duração do filme',
  })
  @IsPositive({
    message: 'A duração deve ser um número positivo',
  })
  length: number;
}
