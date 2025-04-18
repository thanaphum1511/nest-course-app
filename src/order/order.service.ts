import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Order } from './entities/order.entity';
import { OrderItem } from 'src/order-item/entities/order-item.entity';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';

@Injectable()
export class OrdersService {
  constructor(
    @InjectModel(Order) private readonly orderModel: typeof Order,
    @InjectModel(OrderItem) private readonly orderItemModel: typeof OrderItem,
  ) {}

  async create(createOrderDto: CreateOrderDto) {
    const { userId, orderItems, status } = createOrderDto;

    // Create the order first
    const order = await this.orderModel.create({ userId, status });

    // Insert order items linked to the created order
    const orderItemsData = orderItems.map((item) => ({
      orderId: order.id,
      productId: item.productId,
      quantity: item.quantity,
      price: 0, // You should calculate price based on the product price from the menu table
    }));

    await this.orderItemModel.bulkCreate(orderItemsData);

    return order;
  }

  async findAll() {
    return await this.orderModel.findAll({ include: [OrderItem] });
  }

  async findOne(id: number) {
    return await this.orderModel.findOne({
      where: { id },
      include: [OrderItem],
    });
  }

  async update(id: number, updateOrderDto: UpdateOrderDto) {
    await this.orderModel.update(updateOrderDto, { where: { id } });
    return this.findOne(id);
  }

  async remove(id: number) {
    return await this.orderModel.destroy({ where: { id } });
  }
}
