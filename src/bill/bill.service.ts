import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Bill } from './entities/bill.entity';
import { Order } from 'src/order/entities/order.entity';

@Injectable()
export class BillService {
  constructor(
    @InjectModel(Bill)
    private readonly billModel: typeof Bill,
    @InjectModel(Order)
    private readonly orderModel: typeof Order,
  ) {}

  async generateBill(orderId: number): Promise<Bill> {
    const order = await this.orderModel.findByPk(orderId);
    if (!order) {
      throw new Error('Order not found');
    }
    
    const bill = await this.billModel.create({
      orderId: order.id,
      totalAmount: order.totalPrice,
      paymentStatus: 'unpaid',
    } as Partial<Bill>); // ✅ Explicitly type it
  
    return bill;
  }
  

  async getBillByOrderId(orderId: number): Promise<Bill | null> { // ✅ Allow null
    return this.billModel.findOne({ where: { orderId } });
  }
  

  async updateBillStatus(billId: number, paymentStatus: string): Promise<Bill> {
    const bill = await this.billModel.findByPk(billId);
    if (bill) {
      return bill.update({ paymentStatus });
    }
    throw new Error('Bill not found');
  }
}
