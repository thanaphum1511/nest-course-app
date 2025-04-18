import { Module } from '@nestjs/common';
import { BillService } from './bill.service';
import { BillController } from './bill.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Bill } from './entities/bill.entity';
import { Order } from 'src/order/entities/order.entity';
import { OrderModule } from 'src/order/order.module';

@Module({
  imports: [SequelizeModule.forFeature([Bill,Order]),OrderModule],
  controllers: [BillController],
  providers: [BillService],
  exports:[BillService]
})
export class BillModule {}
