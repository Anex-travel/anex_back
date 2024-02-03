/* eslint-disable prettier/prettier */
import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ToursService } from './tours.service';
import { CreateTourDto } from './dto/create-tour.dto';
import { UpdateTourDto } from './dto/update-tour.dto';
import { ApiCreatedResponse, ApiOkResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('Tour')
@Controller('tour')
export class ToursController {
  constructor(private readonly toursService: ToursService) {}

  @ApiCreatedResponse({ description: 'Tour created successfully' })
  @Post()
  create(@Body() createTourDto: CreateTourDto) {
    return this.toursService.create(createTourDto);
  }

  @ApiOkResponse({ description: 'List of Tours' })
  @Get()
  findAll() {
    return this.toursService.findAll();
  }

  @ApiOkResponse({ description: 'View tour by ID' })
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.toursService.findOne(+id);
  }

  @ApiOkResponse({ description: 'Tour edited successfully' })
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTourDto: UpdateTourDto) {
    return this.toursService.update(+id, updateTourDto);
  }

  @ApiOkResponse({ description: 'Tour deleted successfully' })
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.toursService.remove(+id);
  }
}
