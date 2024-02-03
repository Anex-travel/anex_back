import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateCityDto {
  @ApiProperty({
    description: 'Name of city',
    type: String,
    example: 'Tashkent',
  })
  @IsNotEmpty()
  @IsString()
  readonly name: string;

  @ApiProperty({
    description: 'ID of country',
    type: Number,
    example: 1,
  })
  @IsNotEmpty()
  @IsNumber()
  readonly country_id: number;
}
