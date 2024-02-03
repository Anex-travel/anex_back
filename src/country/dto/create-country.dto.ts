import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

/* eslint-disable prettier/prettier */
export class CreateCountryDto {
  @ApiProperty({
    description: 'This is country name',
    type: String,
    example: 'Uzbekistan',
  })
  @IsNotEmpty()
  @IsString()
  readonly name: string;
}
