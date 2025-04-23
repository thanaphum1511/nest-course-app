import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { MusicStore } from './entities/musicstore.entity';

@Injectable()
export class MusicStoreService {
  constructor(
    @InjectModel(MusicStore)
    private readonly musicStoreModel: typeof MusicStore,
  ) {}

  async findAll() {
    return await this.musicStoreModel.findAll({
      order: [['id', 'desc']],
    });
  }

  async findOne(id: number) {
    return await this.musicStoreModel.findByPk(id);
  }

  async create(data) {
    return await this.musicStoreModel.create(data);
  }

  async update(id: number, data) {
    return await this.musicStoreModel.update(data, { where: { id } });
  }

  async remove(id: number) {
    return await this.musicStoreModel.destroy({ where: { id } });
  }
}