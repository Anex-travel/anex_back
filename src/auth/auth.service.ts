/* eslint-disable prettier/prettier */
import { ChangePasswordDto } from './change_password.dto';
import { Injectable, InternalServerErrorException, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UserService } from 'src/user/user.service';
import { LoginUserDto } from './login-user.dto';
import { CreateUserDto } from 'src/user/dto/create-user.dto';
import * as bcrypt from "bcryptjs"
import { User } from 'src/user/user.model';

@Injectable()
export class AuthService {
  constructor(
    private userService: UserService,
    private jwtService: JwtService,
  ) {}

  async login(loginDto: LoginUserDto) {
    const user = await this.validateUser(loginDto);
    const token = await this.generateToken(user);
    return {
      token,
      id: user.id,
    };
  }

  async register(
    createUserDto: CreateUserDto,
    role_id: number,
  ) {
    try {
      if (!role_id) {
        role_id = 3;
      }
      const hashPassword = await bcrypt.hash(createUserDto.password, 7);
      const user = await this.userService.create({
        ...createUserDto,
        password: hashPassword,
        role_id,
      });
      const token = await this.generateToken(user);
      return {
        token,
        id: user.id,
      };
    } catch (err) {
      throw new InternalServerErrorException(err.message);
    }
  }

  async change_password(id: number, changePasswordDto: ChangePasswordDto) {
    try {
      const user = await User.findByPk(id);
      if (user) {
        const isPasswordCompares = await bcrypt.compare(
          changePasswordDto.oldPassword,
          user.password,
        );
        if (isPasswordCompares) {
          if (
            changePasswordDto.newPassword === changePasswordDto.checkNewPassword
          ) {
            const hashPassword = await bcrypt.hash(
              changePasswordDto.newPassword,
              7,
            );
            user.password = hashPassword;
            await user.save();
            return 'Success !'
          } else {
            throw new InternalServerErrorException('Password is not compare');
          }
        } else {
          throw new InternalServerErrorException('Old password is incorrect');
        }
      } else {
        throw new InternalServerErrorException('User is not exists');
      }
    } catch (error) {
      throw new InternalServerErrorException(error.message);
    }
  }

  async generateToken(user: User) {
    try {
      const payload = {
        phone: user.phone,
        sub: user.id,
        role_id: 3,
      };
      return this.jwtService.sign(payload);
    } catch (err) {
      throw new InternalServerErrorException(err.message);
    }
  }

  private async validateUser(loginDto: LoginUserDto) {
    const user = await this.userService.getByPhone(loginDto.phone);
    const passwordEquals = await bcrypt.compare(
      loginDto.password,
      user.password,
    );
    if (user && passwordEquals) {
      return user;
    }
    throw new UnauthorizedException('Phone number or  password is incorrect');
  }
}
