import {
  Controller,
  Post,
  Body,
  Get,
  ValidationPipe,
  Param,
  Query,
  Put,
  Delete,
} from '@nestjs/common';
import { CreateMovieDto } from '../dto/create-movie.dto';
import { UpdateMovieDto } from '../dto/update-movie.dto';
import { MoviesService } from './movies.service';
import { ReturnMovieDto } from '../dto/return-movie.dto';
import { Movie } from './movies.entity';

@Controller('movies')
export class MoviesController {
  constructor(private moviesService: MoviesService) {}

  @Post()
  async create(
    @Body(ValidationPipe) createMovieDto: CreateMovieDto,
  ): Promise<ReturnMovieDto> {
    const movie = await this.moviesService.createMovie(createMovieDto);
    return {
      movie,
      message: 'Filme cadastrado com sucesso',
    };
  }

  @Get()
  async findAll(@Query('limit') limit: number): Promise<Movie[]> {
    return this.moviesService.getMovies(limit);
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<Movie> {
    return this.moviesService.getMovieById(id);
  }

  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body(ValidationPipe) updateMovieDto: UpdateMovieDto,
  ): Promise<ReturnMovieDto> {
    const movie = await this.moviesService.updateMovie(id, updateMovieDto);
    return {
      movie,
      message: 'Filme atualizado com sucesso',
    };
  }

  @Delete(':id')
  async remove(@Param('id') id: string): Promise<ReturnMovieDto> {
    const movie = await this.moviesService.deleteMovie(id);
    return {
      movie,
      message: 'Filme deletado com sucesso',
    };
  }
}
