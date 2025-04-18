import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {ConfigModule} from '@nestjs/config'
import {SequelizeModule } from '@nestjs/sequelize';
import {Dialect} from 'sequelize';
import { AuthModule } from './auth/auth.module';
import { AuthUser } from './auth/entities/auth.entitt';
import { MenuModule } from './menu/menu.module';
import { Menu } from './menu/entities/menu.entity';
import { BillModule } from './bill/bill.module';
import { Bill } from './bill/entities/bill.entity';
import { Order } from './order/entities/order.entity';
import { OrderModule } from './order/order.module';
import { OrderItem } from './order-item/entities/order-item.entity';
import { Payment } from './payment/entities/payment.entity';
import { OrderItemModule } from './order-item/order-item.module';
import { PaymentModule } from './payment/payment.module';

@Module({
  imports:[
    ConfigModule.forRoot(),
    SequelizeModule.forRoot({
      dialect : process.env.DB_DIALECT as Dialect,
      host : process.env.DB_HOST,
      port : Number(process.env.DB_PORT),
      username : process.env.DB_USER,
      password : process.env.DB_PASSWORD,
      database : process.env.DB_DATABASE,
      models : [AuthUser,Menu,Order,Bill,OrderItem,Payment],   
      autoLoadModels: true,
      sync: {alter: true},   
      synchronize: false,
    }),

    AuthModule,
    MenuModule,
    OrderModule,
    BillModule,
    OrderItemModule,
    PaymentModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
