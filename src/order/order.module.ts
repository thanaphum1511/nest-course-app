import { Module } from '@nestjs/common';
import {UtilityModule} from 'src/shared/utility/utility.module';
import { OrderController } from './order.controller';

@Module({
 imports: [UtilityModule],
  controllers: [OrderController],
})
export class OrderModule {}
