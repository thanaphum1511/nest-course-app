import { Controller, Get, Post, Body, Param, Patch, Delete, NotFoundException } from '@nestjs/common';
import { MusicStoreService } from './musicstore.service';

@Controller('musicstore')
export class MusicStoreController {
  constructor(private readonly musicStoreService: MusicStoreService) {}

  @Get()
  findAll() {
    return this.musicStoreService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    const data = await this.musicStoreService.findOne(+id);
    if (!data) throw new NotFoundException('Not Found Data!!!');
    return data;
  }

  @Post()
  async create(@Body() body) {
    const result = await this.musicStoreService.create(body);
    if (!result) throw new Error('Cannot Create Data!!!');
    return { message: 'Create Data Complete', data: result };
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() body) {
    const [result] = await this.musicStoreService.update(+id, body);
    if (result === 0) throw new NotFoundException('Not Found Data to Update!!!');
    return { message: 'Update Data Complete' };
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    const result = await this.musicStoreService.remove(+id);
    if (result === 0) throw new NotFoundException('Not Found Data to Remove!!!');
    return { message: 'Remove Data Complete' };
  }
}