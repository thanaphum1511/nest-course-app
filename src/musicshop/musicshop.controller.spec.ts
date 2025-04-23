import { Test, TestingModule } from '@nestjs/testing';
import { MusicshopController } from './musicshop.controller';
import { MusicshopService } from './musicshop.service';

describe('MusicshopController', () => {
  let controller: MusicshopController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MusicshopController],
      providers: [MusicshopService],
    }).compile();

    controller = module.get<MusicshopController>(MusicshopController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
