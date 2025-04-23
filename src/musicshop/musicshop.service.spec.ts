import { Test, TestingModule } from '@nestjs/testing';
import { MusicshopService } from './musicshop.service';

describe('MusicshopService', () => {
  let service: MusicshopService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MusicshopService],
    }).compile();

    service = module.get<MusicshopService>(MusicshopService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
