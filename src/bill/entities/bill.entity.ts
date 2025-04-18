import { Column, DataType, Model, Table, ForeignKey } from 'sequelize-typescript';
import { Order } from 'src/order/entities/order.entity';

@Table({
  tableName: 'bill',  // Explicitly define the table name
  timestamps: false,   // Disable createdAt and updatedAt timestamps
})
export class Bill extends Model {
  
  @ForeignKey(() => Order)
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  orderId: number;

  @Column({
    type: DataType.FLOAT,
    allowNull: false,
  })
  totalAmount: number;

  @Column({
    type: DataType.STRING(50),
    allowNull: false,
    defaultValue: 'unpaid',  // Default value for payment status
  })
  paymentStatus: string;  // Example: 'paid', 'unpaid'
}
