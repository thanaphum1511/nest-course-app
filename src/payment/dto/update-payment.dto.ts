import { IsInt, IsString, IsDecimal, IsOptional } from 'class-validator';
import { Transform } from 'class-transformer';

export class UpdatePaymentDto {
  @IsOptional()
  @IsInt()
  orderId?: number;

  @IsOptional()
  @Transform(({ value }) => value.toString())  // Convert to string
  @IsDecimal()  // Ensure it's a valid decimal string
  amount?: number;

  @IsOptional()
  @IsString()
  paymentMethod?: string;

  @IsOptional()
  @IsString()
  status?: string;
}
