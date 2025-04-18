import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { OrderItem } from './entities/order-item.entity';
import { CreateOrderItemDto } from './dto/create-order-item.dto';
import { UpdateOrderItemDto } from './dto/update-order-item.dto';
import { Menu } from 'src/menu/entities/menu.entity';

@Injectable()
export class OrderItemsService {
  constructor(
    @InjectModel(OrderItem) private readonly orderItemModel: typeof OrderItem,
    @InjectModel(Menu) private readonly menuModel: typeof Menu
  ) {}

  async create(createOrderItemDto: CreateOrderItemDto) {
    // Check if the product exists
    const menuItem = await this.menuModel.findByPk(createOrderItemDto.productId);
    if (!menuItem) {
      throw new NotFoundException(`Product with ID ${createOrderItemDto.productId} not found`);
    }
  
    // Ensure correct field mapping
    const orderItem = await this.orderItemModel.create({
      orderId: createOrderItemDto.orderId,
      productId: createOrderItemDto.productId,
      quantity: createOrderItemDto.quantity,
      price: createOrderItemDto.price
    });
  
    return orderItem;
  }
  

  async findAll() {
    return await this.orderItemModel.findAll();
  }

  async findOne(id: number) {
    return await this.orderItemModel.findOne({ where: { id } });
  }

  async update(id: number, updateOrderItemDto: UpdateOrderItemDto) {
    await this.orderItemModel.update(updateOrderItemDto, { where: { id } });
    return this.findOne(id);
  }

  async remove(id: number) {
    return await this.orderItemModel.destroy({ where: { id } });
  }
}
