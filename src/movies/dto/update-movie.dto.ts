import { ApiProperty } from '@nestjs/swagger';
import {
  MaxLength,
  IsDateString,
  IsPositive,
  IsOptional,
} from 'class-validator';

export class UpdateMovieDto {
  @ApiProperty({
    example: 'The Batman',
    description: 'O título do filme',
    required: false,
    maxLength: 200,
  })
  @IsOptional()
  @MaxLength(200, {
    message: 'O título deve ter menos de 200 caracteres',
  })
  title: string;

  @ApiProperty({
    example: 'Um filme de ação e muito drama',
    description: 'A descrição do filme',
    required: false,
    maxLength: 1000,
  })
  @IsOptional()
  @MaxLength(1000, {
    message: 'A descrição do filme deve ter menos de 1000 caracteres',
  })
  description: string;

  @ApiProperty({
    example: '2022-07-11',
    description: 'A data de lançamento do filme',
    required: false,
    maxLength: 10,
    minLength: 10,
  })
  @IsOptional()
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
    required: false,
    minimum: 1,
  })
  @IsOptional()
  @IsPositive({
    message: 'A duração deve ser um número positivo',
  })
  length: number;
}
