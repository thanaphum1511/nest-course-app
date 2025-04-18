import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Payment } from './entities/payment.entity';
import { CreatePaymentDto } from './dto/create-payment.dto';
import { Order } from 'src/order/entities/order.entity';

@Injectable()
export class PaymentsService {
  constructor(
    @InjectModel(Payment) private readonly paymentModel: typeof Payment,
    @InjectModel(Order) private readonly orderModel: typeof Order
  ) {}

  async create(createPaymentDto: CreatePaymentDto) {
    // Check if the order exists
    const order = await this.orderModel.findByPk(createPaymentDto.orderId);
    if (!order) {
      throw new NotFoundException(`Order with ID ${createPaymentDto.orderId} not found`);
    }

    // Map the DTO to the model fields
    const paymentData = {
      orderId: createPaymentDto.orderId,
      amount: createPaymentDto.amount,
      paymentMethod: createPaymentDto.paymentMethod,
      status: createPaymentDto.status,
    };

    // Create the payment
    const payment = await this.paymentModel.create(paymentData);
    return payment;
  }

  async findAll() {
    return await this.paymentModel.findAll();
  }

  async findOne(id: number) {
    return await this.paymentModel.findOne({ where: { id } });
  }

  async update(id: number, updatePaymentDto: any) {
    await this.paymentModel.update(updatePaymentDto, { where: { id } });
    return this.findOne(id);
  }

  async remove(id: number) {
    return await this.paymentModel.destroy({ where: { id } });
  }
}
