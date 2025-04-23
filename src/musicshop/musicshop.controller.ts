import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { MusicshopService } from './musicshop.service';
import { CreateMusicshopDto } from './dto/create-musicshop.dto';
import { UpdateMusicshopDto } from './dto/update-musicshop.dto';

@Controller('musicshop')
export class MusicshopController {
  constructor(private readonly musicshopService: MusicshopService) {}

  @Post()
  create(@Body() createMusicshopDto: CreateMusicshopDto) {
    return this.musicshopService.create(createMusicshopDto);
  }

  @Get()
  findAll() {
    return this.musicshopService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.musicshopService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateMusicshopDto: UpdateMusicshopDto) {
    return this.musicshopService.update(+id, updateMusicshopDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.musicshopService.remove(+id);
  }
}
