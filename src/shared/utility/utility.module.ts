import { Module } from '@nestjs/common';
import { UtilityService } from './utility.service';
import { UtilityController } from './utility.controller';

@Module({

  providers: [UtilityService],
  exports: [UtilityService],
  controllers: [UtilityController],
})
export class UtilityModule {
}
