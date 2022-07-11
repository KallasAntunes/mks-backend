import { ApiProperty } from '@nestjs/swagger';

export class BadRequestDto {
  @ApiProperty({ type: Number, example: 400 })
  statusCode: number;
  @ApiProperty({
    type: String,
    isArray: true,
    example: 'Informe a data de lançamento do filme',
  })
  message: string[];
  @ApiProperty({ type: String, example: 'Bad Request' })
  error: string;
}
