/* eslint-disable prettier/prettier */
import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

/* eslint-disable prettier/prettier */
export class CreateTourDto {
  @ApiProperty({
    description: 'This column for descriptions',
    type: String,
    example: 'This is cheaper tour you have ever seen !',
  })
  readonly description: string;

  @ApiProperty({
    description: 'This column for descriptions which you have forgotten )))',
    type: String,
    example: "I don't know why this column is needed",
  })
  readonly sub_description: string;

  @ApiProperty({
    description: 'URL of photo',
    type: String,
    example: 'http://localhost:3000/1390aa5f-1b52-46b6-b75b-6915aedd9669.jpg',
  })
  readonly photo: string;

  @ApiProperty({
    description: 'Rating for tours',
    type: Number,
    example: 4.6,
  })
  readonly stars: number;

  @ApiProperty({
    description: 'Static price of tour',
    type: Number,
    example: 500000,
  })
  @IsNotEmpty()
  @IsNumber()
  readonly price: number;

  @ApiProperty({
    description: 'ID of country',
    type: Number,
    example: 1,
  })
  @IsNotEmpty()
  @IsNumber()
  readonly country_id: number;

  @ApiProperty({
    description: 'ID of city',
    type: Number,
    example: 1,
  })
  @IsNotEmpty()
  @IsNumber()
  readonly city_id: number;

  @ApiProperty({
    description: 'ID of hotel if exists',
    type: Number,
    example: 1,
  })
  readonly hotel_id: number;

  @ApiProperty({
    description: 'ID of tour type',
    type: Number,
    example: 1,
  })
  @IsNotEmpty()
  @IsNumber()
  readonly type_id: number;
}
