import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { OrderItem } from './entities/order-item.entity';
import { OrderItemsController } from './order-item.controller';
import { OrderItemsService } from './order-item.service';
import { Menu } from 'src/menu/entities/menu.entity';

@Module({
  imports: [SequelizeModule.forFeature([OrderItem,Menu])],
  controllers: [OrderItemsController],
  providers: [OrderItemsService],
})
export class OrderItemModule {}
