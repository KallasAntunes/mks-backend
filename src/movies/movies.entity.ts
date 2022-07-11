import { ApiProperty } from '@nestjs/swagger';
import { randomUUID } from 'crypto';
import {
  BaseEntity,
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export class Movie extends BaseEntity {
  @ApiProperty({
    type: String,
    description: 'Identificador do filme',
    example: '752020af-ca53-4638-b0e0-2dc22f2585b7',
  })
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ApiProperty({
    type: String,
    example: 'The Batman',
    description: 'O título do filme',
    required: true,
    maxLength: 200,
  })
  @Column({ nullable: false, type: 'varchar', length: 200 })
  title: string;

  @ApiProperty({
    type: String,
    example: 'Um filme de ação e muito drama',
    description: 'A descrição do filme',
    required: true,
    maxLength: 1000,
  })
  @Column({ nullable: false, type: 'varchar', length: 1000 })
  description: string;

  @ApiProperty({
    example: '2022-07-11',
    type: String,
    description: 'A data de lançamento do filme',
    required: true,
    maxLength: 10,
    minLength: 10,
  })
  @Column({ nullable: false, type: 'date' })
  release_date: string;

  @ApiProperty({
    example: 120,
    type: Number,
    description: 'A duração do filme em minutos',
    required: true,
    minimum: 1,
  })
  @Column({ nullable: false, type: 'integer' })
  length: number;

  @ApiProperty({
    example: '2022-07-10 18:15:16.628032',
    type: String,
    description: 'A data de criação do filme no sistema',
    readOnly: true,
  })
  @CreateDateColumn()
  createdAt: Date;

  @ApiProperty({
    example: '2022-07-10 18:15:16.628032',
    type: String,
    description: 'A data da última edição do filme no sistema',
    readOnly: true,
  })
  @UpdateDateColumn()
  updatedAt: Date;
}
