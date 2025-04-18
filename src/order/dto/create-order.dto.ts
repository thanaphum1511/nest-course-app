import { IsInt, IsArray, IsEnum } from "class-validator";
import { OrderStatus } from 'src/order/entities/order-status.enum';

export class CreateOrderDto {
    @IsInt()
    userId: number;

    @IsArray()
    orderItems: { productId: number; quantity: number }[];

    @IsEnum(OrderStatus)
    status: OrderStatus;    
}
