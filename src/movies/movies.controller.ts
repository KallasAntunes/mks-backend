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
import { CreateMovieDto } from './dto/create-movie.dto';
import { UpdateMovieDto } from './dto/update-movie.dto';
import { MoviesService } from './movies.service';
import { ReturnMovieDto } from './dto/return-movie.dto';
import { Movie } from './movies.entity';
import {
  ApiBadRequestResponse,
  ApiBody,
  ApiOkResponse,
  ApiParam,
  ApiQuery,
  ApiTags,
  getSchemaPath,
} from '@nestjs/swagger';
import { BadRequestDto } from './dto/bad-request.dto';
@ApiTags('movies')
@Controller('movies')
export class MoviesController {
  constructor(private moviesService: MoviesService) {}

  @ApiOkResponse({ type: ReturnMovieDto })
  @ApiBadRequestResponse({ type: BadRequestDto })
  @ApiBody({ type: CreateMovieDto })
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

  @ApiOkResponse({ type: Movie, isArray: true })
  @ApiBadRequestResponse({ type: BadRequestDto })
  @ApiQuery({
    name: 'limit',
    type: Number,
    description: 'Limita o número de filmes retornados',
    required: false,
    example: 2,
  })
  @Get()
  async findAll(@Query('limit') limit?: number): Promise<Movie[]> {
    return this.moviesService.getMovies(limit);
  }

  @ApiOkResponse({ type: Movie })
  @ApiBadRequestResponse({ type: BadRequestDto })
  @ApiParam({
    name: 'id',
    type: String,
    description: 'O id do filme',
    required: true,
    example: 'f9c6f6ab-bbc9-4e17-9c13-a23ac74bdd73',
  })
  @Get(':id')
  async findOne(@Param('id') id: string): Promise<Movie> {
    return this.moviesService.getMovieById(id);
  }

  @ApiOkResponse({ type: ReturnMovieDto })
  @ApiBadRequestResponse({ type: BadRequestDto })
  @ApiBody({ type: UpdateMovieDto })
  @ApiParam({
    name: 'id',
    type: String,
    description: 'O id do filme',
    required: true,
    example: 'f9c6f6ab-bbc9-4e17-9c13-a23ac74bdd73',
  })
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

  @ApiOkResponse({ type: ReturnMovieDto })
  @ApiBadRequestResponse({ type: BadRequestDto })
  @ApiParam({
    name: 'id',
    type: String,
    description: 'O id do filme',
    required: true,
    example: 'f9c6f6ab-bbc9-4e17-9c13-a23ac74bdd73',
  })
  @Delete(':id')
  async remove(@Param('id') id: string): Promise<ReturnMovieDto> {
    const movie = await this.moviesService.deleteMovie(id);
    return {
      movie,
      message: 'Filme deletado com sucesso',
    };
  }
}
