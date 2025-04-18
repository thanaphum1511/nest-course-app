import { Controller, Post, Get, Param, Body, Delete, Put } from '@nestjs/common';
import { OrderItemsService } from './order-item.service';
import { CreateOrderItemDto } from './dto/create-order-item.dto';
import { UpdateOrderItemDto } from './dto/update-order-item.dto';

@Controller('order-items')
export class OrderItemsController {
  constructor(private readonly orderItemsService: OrderItemsService) {}

  @Post()
  async create(@Body() createOrderItemDto: CreateOrderItemDto) {
    return this.orderItemsService.create(createOrderItemDto);
  }

  @Get()
  async findAll() {
    return this.orderItemsService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: number) {
    return this.orderItemsService.findOne(id);
  }

  @Put(':id')
  async update(@Param('id') id: number, @Body() updateOrderItemDto: UpdateOrderItemDto) {
    return this.orderItemsService.update(id, updateOrderItemDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: number) {
    return this.orderItemsService.remove(id);
  }
}
