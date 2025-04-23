import { Module } from '@nestjs/common';
import { MusicStoreService } from './musicstore.service';
import { MusicStoreController } from './musicstore.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { MusicStore } from './entities/musicstore.entity';

@Module({
  imports: [SequelizeModule.forFeature([MusicStore])],
  controllers: [MusicStoreController],
  providers: [MusicStoreService],
})
export class MusicStoreModule {}