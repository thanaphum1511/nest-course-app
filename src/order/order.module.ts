// orders.module.ts
import { Module } from '@nestjs/common';
import { OrdersService } from './order.service';
import { OrdersController } from './order.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Order } from './entities/order.entity';
import { OrderItem } from 'src/order-item/entities/order-item.entity';
import { Menu } from 'src/menu/entities/menu.entity';

@Module({
  imports: [SequelizeModule.forFeature([Order, OrderItem, Menu])],
  controllers: [OrdersController],
  providers: [OrdersService],
})
export class OrderModule {}