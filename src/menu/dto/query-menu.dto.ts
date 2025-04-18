import { IsOptional, IsString } from 'class-validator';

export class QueryMenuDto {
  @IsOptional()
  @IsString()
  readonly name?: string;

  @IsOptional()
  @IsString()
  readonly category?: string;

  @IsOptional()
  readonly priceMin?: number;

  @IsOptional()
  readonly priceMax?: number;
}
