import {
  Table,
  Column,
  Model,
  ForeignKey,
  BelongsTo,
} from 'sequelize-typescript';
import { Order } from 'src/order/entities/order.entity';
import { Menu } from 'src/menu/entities/menu.entity';

@Table({ tableName: 'order_items', timestamps: true })
export class OrderItem extends Model {
  @Column({ primaryKey: true, autoIncrement: true })
  id: number;

  @ForeignKey(() => Order)
  @Column
  orderId: number;

  @BelongsTo(() => Order, { onDelete: 'CASCADE' }) // Ensure cascading delete for Order
  order: Order;

  @ForeignKey(() => Menu)
  @Column
  productId: number;

  @BelongsTo(() => Menu, { onDelete: 'CASCADE' }) // Ensure cascading delete for Product
  product: Menu;

  @Column({ allowNull: false })
  quantity: number;

  @Column({ allowNull: false, type: 'decimal' })
  price: number;
}