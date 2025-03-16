import { Injectable } from '@nestjs/common';
import { CreateCustomerDto } from './dto/create-customer.dto';
import { UpdateCustomerDto } from './dto/update-customer.dto';
import { Injector } from '@nestjs/core/injector/injector';
import { Customer } from './entities/customer.entity';
import { InjectModel } from '@nestjs/sequelize';
import { CreateContextOptions } from 'node:vm';

@Injectable()
export class CustomerService {
  constructor(
    @InjectModel(Customer)
    private customerModel: typeof Customer,
  ){}
  async findAll() {
    return await this.customerModel.findAll({
    order: [['id','desc']],
  });
}

  async findOne(id: number) {
    return await this.customerModel.findByPk(id);
  }

  async findFullname(fullname: string){
    return await this.customerModel.findOne({
      where: {
        fullname: fullname,
      },
    });
  }

  async create(createCustomerDto: CreateCustomerDto){
    return await this.customerModel.create(
      createCustomerDto as Partial<Customer>
    );
  }
  async update(id: number, updateCustomerDto: UpdateCustomerDto) {
    return await this.customerModel.update(updateCustomerDto, {
      where: { id: id },
    });
  }

  remove(id: number) {
    return `This action removes a #${id} customer`;
  }
}
