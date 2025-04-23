import { Module } from '@nestjs/common';
import { MusicshopService } from './musicshop.service';
import { MusicshopController } from './musicshop.controller';

@Module({
  controllers: [MusicshopController],
  providers: [MusicshopService],
})
export class MusicshopModule {}
