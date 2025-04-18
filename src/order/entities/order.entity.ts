// order.entity.ts
import {
    Table,
    Column,
    Model,
    DataType,
    ForeignKey,
    BelongsTo,
    HasMany,
  } from 'sequelize-typescript';
  import { AuthUser } from 'src/auth/entities/auth.entitt';
  import { OrderItem } from 'src/order-item/entities/order-item.entity';
  import { OrderStatus } from './order-status.enum';
  import { Payment } from 'src/payment/entities/payment.entity';
 
  
  @Table({ tableName: 'orders', timestamps: true })
  export class Order extends Model {
    @Column({
      type: DataType.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    })
    id: number;
  
    @ForeignKey(() => AuthUser)
    @Column({ type: DataType.INTEGER, allowNull: false })
    userId: number;
  
    @BelongsTo(() => AuthUser)
    user: AuthUser;
  
    @HasMany(() => OrderItem)
    orderItems: OrderItem[];
  
    @Column({
      type: DataType.ENUM(...Object.values(OrderStatus)),
      allowNull: false,
      defaultValue: OrderStatus.PENDING,
    })
    status: OrderStatus;
  
    @HasMany(() => Payment)
    payments: Payment[];


    @Column({
      type: DataType.FLOAT,  // Or DECIMAL(10,2) for precise currency values
      allowNull: false,
      defaultValue: 0.0,
  })
  totalPrice: number;
  
  }