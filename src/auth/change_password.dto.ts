/* eslint-disable prettier/prettier */
import { IsNotEmpty, IsPhoneNumber, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class ChangePasswordDto {
  @ApiProperty({ example: '12345678' })
  @IsNotEmpty()
  oldPassword: string;

  @ApiProperty({ example: '12345678' })
  @IsNotEmpty()
  newPassword: string;

  @ApiProperty({ example: '12345678' })
  @IsNotEmpty()
  checkNewPassword: string;
}
