/* eslint-disable prettier/prettier */
import {
  Body,
  Controller,
  Param,
  Patch,
  Post,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { CreateUserDto } from 'src/user/dto/create-user.dto';
import { AuthService } from './auth.service';
import { LoginUserDto } from './login-user.dto';
import { FileInterceptor } from '@nestjs/platform-express';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { ChangePasswordDto } from './change_password.dto';

@ApiTags('Authentication/Authorization')
@Controller()
export class AuthController {
  constructor(private authService: AuthService) {}

  @ApiOperation({ summary: 'LOGIN User' })
  @Post('/login')
  login(@Body() loginDto: LoginUserDto) {
    return this.authService.login(loginDto);
  }

  @ApiOperation({ summary: 'Register User' })
  @Post('/register')
  @UseInterceptors(FileInterceptor('passport_photo'))
  register(
    @Body() createUserDto: CreateUserDto, role_id: number,
    @UploadedFile() passport_photo,
  ): Promise<{ token: string; id: number; }> {
    return this.authService.register(createUserDto, role_id, passport_photo);
  }

  @Patch('change-password/:id')
   changePassword(
    @Param('id')id:string, 
    @Body() changePasswordDto: ChangePasswordDto
   )
   {
    return this.authService.change_password(+id, changePasswordDto)
   }

}
