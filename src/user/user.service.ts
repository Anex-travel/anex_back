/* eslint-disable prettier/prettier */
import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './user.model';

@Injectable()
export class UserService {
  constructor(@InjectModel(User) private repository: typeof User) {}

  async create(createUserDto: CreateUserDto) {
    const newUser = await this.repository.create(createUserDto);
    return newUser;
  }

  async findAll() {
    const data = await this.repository.findAll({
      include: { all: true },
    });
    return data;
  }

  async findOne(id: number) {
    const data = await this.repository.findOne({
      where: { id },
      include: { all: true },
    });
    if (!data) {
      throw new HttpException('Role is not exists', HttpStatus.NOT_FOUND);
    }
    return data;
  }

  async update(id: number, data: UpdateUserDto) {
    const updated = await this.repository.update(data, {
      where: { id },
    });
    // if (!updated) {
    //   throw new HttpException('User is not exists', HttpStatus.NOT_FOUND);
    // }
    if (!updated[0]) {
      throw new HttpException('User is not exists', HttpStatus.NOT_FOUND);
    }
    return { message: 'User is updated' };
  }

  async remove(id: number) {
    const data = await this.repository.destroy({ where: { id } });
    if (!data) {
      throw new HttpException('User is not exists', HttpStatus.NOT_FOUND);
    }
    return { message: 'User is deleted' };
  }

  async getByPhone(phone: string) {
    const user = await this.repository.findOne({ where: { phone } });
    return user;
  }
}
