import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateTypeDto } from './dto/create-type.dto';
import { UpdateTypeDto } from './dto/update-type.dto';
import { Type } from './type.model';
import { InjectModel } from '@nestjs/sequelize';

@Injectable()
export class TypeService {
  constructor(@InjectModel(Type) private repository: typeof Type) {}

  async create(createUserDto: CreateTypeDto) {
    const newType = await this.repository.create(createUserDto);
    return newType;
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
      throw new HttpException('Type is not exists', HttpStatus.NOT_FOUND);
    }
    return data;
  }

  async update(id: number, data: UpdateTypeDto) {
    const updated = await this.repository.update(data, {
      where: { id },
    });
    if (!updated[0]) {
      throw new HttpException('Type is not exists', HttpStatus.NOT_FOUND);
    }
    return { message: 'Type is updated' };
  }

  async remove(id: number) {
    const data = await this.repository.destroy({ where: { id } });
    if (!data) {
      throw new HttpException('Type is not exists', HttpStatus.NOT_FOUND);
    }
    return { message: 'Type is deleted' };
  }
}
