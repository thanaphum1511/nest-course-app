import { Table, Column, Model, ForeignKey, BelongsTo } from 'sequelize-typescript';
import { Order } from 'src/order/entities/order.entity';

@Table({ tableName: 'payments', timestamps: true })
export class Payment extends Model {
  @Column({ primaryKey: true, autoIncrement: true })
  id: number;

  @ForeignKey(() => Order)
  @Column
  orderId: number;

  @BelongsTo(() => Order, { onDelete: 'CASCADE' }) // Add onDelete CASCADE for cascading deletes
  order: Order;

  @Column({ allowNull: false })
  paymentMethod: string;

  @Column({ allowNull: false })
  status: string;

  @Column({ type: 'DECIMAL', allowNull: false })
  amount: number;
  
}
