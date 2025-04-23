import { Injectable } from '@nestjs/common';
import { CreateMusicshopDto } from './dto/create-musicshop.dto';
import { UpdateMusicshopDto } from './dto/update-musicshop.dto';

@Injectable()
export class MusicshopService {
  create(createMusicshopDto: CreateMusicshopDto) {
    return 'This action adds a new musicshop';
  }

  findAll() {
    return `This action returns all musicshop`;
  }

  findOne(id: number) {
    return `This action returns a #${id} musicshop`;
  }

  update(id: number, updateMusicshopDto: UpdateMusicshopDto) {
    return `This action updates a #${id} musicshop`;
  }

  remove(id: number) {
    return `This action removes a #${id} musicshop`;
  }
}
