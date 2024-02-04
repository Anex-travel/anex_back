import { ApiProperty } from '@nestjs/swagger';
import {
  IsNotEmpty,
  IsNumber,
  IsPhoneNumber,
  IsString,
  MinLength,
  Validate,
} from 'class-validator';

/* eslint-disable prettier/prettier */
export class CreateUserDto {
  @ApiProperty({
    description: 'Name of the user',
    type: String,
    example: 'User name',
  })
  @IsNotEmpty()
  @IsString()
  readonly fullname: string;

  @ApiProperty({
    description: 'User phone based on "UZ" region',
    type: String,
    example: '+998951234567',
  })
  @IsNotEmpty()
  @IsString()
  @IsPhoneNumber('UZ')
  readonly phone: string;

  @ApiProperty({
    description: 'User hashed password for register',
    type: String,
    example: '123456',
  })
  @IsNotEmpty()
  @IsString()
  @MinLength(6)
  readonly password: string;

  @ApiProperty({
    description: 'User salary per month',
    type: Number,
    example: 500000,
  })
  @IsNumber()
  readonly salary: number;

  // @ApiProperty({
  //   description: 'ID of Role for current user',
  //   type: Number,
  //   example: 1,
  // })
  readonly role_id: number;
}
