import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, IsOptional } from 'class-validator';

export class CreateOrderDto {
  @ApiProperty({
    description: 'The final price of order',
    type: Number,
    example: 1200000,
  })
  @IsOptional()
  readonly total_price: number;

  @ApiProperty({
    description: 'ID of user (admin)',
    type: Number,
    example: 1,
  })
  @IsNotEmpty()
  @IsNumber()
  readonly user_id: number;

  @ApiProperty({
    description: 'ID of tour (if exists)',
    type: Number,
    example: 1,
  })
  readonly tour_id: number;
}
