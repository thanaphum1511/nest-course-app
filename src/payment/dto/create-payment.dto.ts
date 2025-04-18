import { Transform, Type } from 'class-transformer';
import { IsInt, IsString, IsDecimal, IsNumber } from 'class-validator';

export class CreatePaymentDto {
  @IsInt()
  orderId: number;

  @Transform(({ value }) => value.toString())  
  @IsDecimal()  
  amount: number;

  @IsString()
  paymentMethod: string;

  @IsString()
  status: string;
}
