import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateHotelDto {
  @ApiProperty({
    description: 'This column for descriptions',
    type: String,
    example: 'This is comfortable hotel you have ever seen !',
  })
  @IsString()
  readonly description: string;

  @ApiProperty({
    description: 'This column for descriptions which you have forgotten )))',
    type: String,
    example: "I don't know why this column is needed",
  })
  @IsString()
  readonly sub_description: string;

  @ApiProperty({
    description: 'URL of photo',
    type: String,
    example: 'http://localhost:3000/1390aa5f-1b52-46b6-b75b-6915aedd9669.jpg',
  })
  @IsString()
  readonly photo: string;

  @ApiProperty({
    description: 'Days spend in the hotel',
    type: Number,
    example: 7,
  })
  @IsNumber()
  readonly stay_time: number;

  @ApiProperty({
    description: 'Hotel stay price',
    type: Number,
    example: 500000,
  })
  @IsNumber()
  readonly price: number;

  @ApiProperty({
    description: 'Count of persons who will live in the hotel',
    type: Number,
    example: 5,
  })
  @IsNumber()
  readonly guests_count: number;

  @ApiProperty({
    description: 'Rating for hotels',
    type: Number,
    example: 4.6,
  })
  readonly stars: number;

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
}
