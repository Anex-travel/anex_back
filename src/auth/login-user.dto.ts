/* eslint-disable prettier/prettier */
import { IsNotEmpty, IsPhoneNumber, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class LoginUserDto {
  @ApiProperty({ example: '+998951234567' })
  @IsNotEmpty()
  @IsString()
  @IsPhoneNumber("UZ")
  phone: string;

  @ApiProperty({ example: '12345678' })
  @IsNotEmpty()
  @IsString()
  password: string;
}
