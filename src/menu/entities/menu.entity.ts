import { Column, Model, Table, DataType } from 'sequelize-typescript';

@Table({
  tableName: 'menu',  // Explicitly define the table name
  timestamps: false,  // Disable createdAt and updatedAt timestamps
})
export class Menu extends Model {
  @Column({
    type: DataType.STRING(200),
    allowNull: false,
  })
  name: string;

  @Column({
    type: DataType.TEXT,
    allowNull: false,
  })
  description: string;

  @Column({
    type: DataType.FLOAT,
    allowNull: false,
  })
  price: number;

  @Column({
    type: DataType.STRING(500),
    allowNull: true,
  })
  imageUrl: string;

  @Column({
    type: DataType.STRING(255),  // If you have a category field
    allowNull: true,
  })
  category: string;
}
