import { ApiProperty } from '@nestjs/swagger';
import { IsBoolean, IsNotEmpty, IsNumber, IsString } from 'class-validator';

/* eslint-disable prettier/prettier */
export class CreateFlightDto {
  @ApiProperty({
    description: 'ID of city',
    type: Number,
    example: 1,
  })
  @IsNotEmpty()
  @IsNumber()
  readonly from: number;

  @ApiProperty({
    description: 'ID of city',
    type: Number,
    example: 1,
  })
  @IsNotEmpty()
  @IsNumber()
  readonly to: number;

  @ApiProperty({
    description: 'Aviation company for flight',
    type: String,
    example: 'Turkish Airlines',
  })
  @IsNotEmpty()
  @IsString()
  readonly aviation_company: string;

  @ApiProperty({
    description: 'Price of flight',
    type: Number,
    example: 200,
  })
  @IsNotEmpty()
  @IsNumber()
  readonly price: number;

  @ApiProperty({
    description: 'Is flight active ?',
    type: Boolean,
    example: true,
  })
  @IsBoolean()
  readonly is_active: boolean;

  @ApiProperty({
    description: 'Rating for flight',
    type: Number,
    example: 4.6,
  })
  readonly stars: number;

  @ApiProperty({
    description: 'Type of flight',
    type: String,
    example: 'Charter or smth else',
  })
  readonly type: string;
}
