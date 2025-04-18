import { Controller, Get, Post, Param, Body, Put } from '@nestjs/common';
import { BillService } from './bill.service';

@Controller('bills')
export class BillController {
  constructor(private readonly billService: BillService) {}

  @Post(':orderId')
  generate(@Param('orderId') orderId: number) {
    return this.billService.generateBill(orderId);
  }

  @Get(':orderId')
  findByOrderId(@Param('orderId') orderId: number) {
    return this.billService.getBillByOrderId(orderId);
  }

  @Put(':billId')
  updatePaymentStatus(@Param('billId') billId: number, @Body() updateDto: any) {
    return this.billService.updateBillStatus(billId, updateDto.paymentStatus);
  }
}
