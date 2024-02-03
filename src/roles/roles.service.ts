import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreateRoleDto } from './dto/create-role.dto';
import { UpdateRoleDto } from './dto/update-role.dto';
import { Role } from './roles.model';

@Injectable()
export class RolesService {
  constructor(@InjectModel(Role) private repository: typeof Role) {}

  async create(createCartDto: CreateRoleDto) {
    const newRole = await this.repository.create(createCartDto);
    return newRole;
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

  async update(id: number, data: UpdateRoleDto) {
    const updated = await this.repository.update(data, {
      where: { id },
    });
    if (!updated[0]) {
      throw new HttpException('Role is not exists', HttpStatus.NOT_FOUND);
    }
    return { message: 'Role is updated' };
  }

  async remove(id: number) {
    const data = await this.repository.destroy({ where: { id } });
    if (!data) {
      throw new HttpException('Role is not exists', HttpStatus.NOT_FOUND);
    }
    return { message: 'Role is deleted' };
  }
}
