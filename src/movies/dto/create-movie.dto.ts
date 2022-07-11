import { ApiProperty } from '@nestjs/swagger';
import {
  IsNotEmpty,
  MaxLength,
  IsDateString,
  IsPositive,
} from 'class-validator';

export class CreateMovieDto {
  @ApiProperty({
    example: 'The Batman',
    description: 'O título do filme',
    required: true,
    maxLength: 200,
  })
  @IsNotEmpty({
    message: 'Informe o título do filme',
  })
  @MaxLength(200, {
    message: 'O título deve ter menos de 200 caracteres',
  })
  title: string;

  @ApiProperty({
    example: 'Um filme de ação e muito drama',
    description: 'A descrição do filme',
    required: true,
    maxLength: 1000,
  })
  @IsNotEmpty({
    message: 'Informe a descrição do filme',
  })
  @MaxLength(1000, {
    message: 'A descrição do filme deve ter menos de 1000 caracteres',
  })
  description: string;

  @ApiProperty({
    example: '2022-07-11',
    description: 'A data de lançamento do filme',
    required: true,
    maxLength: 10,
    minLength: 10,
  })
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

  @ApiProperty({
    example: 120,
    description: 'A duração do filme em minutos',
    required: true,
    minimum: 1,
  })
  @IsNotEmpty({
    message: 'Informe a duração do filme',
  })
  @IsPositive({
    message: 'A duração deve ser um número positivo',
  })
  length: number;
}
