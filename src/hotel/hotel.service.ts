import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateHotelDto } from './dto/create-hotel.dto';
import { UpdateHotelDto } from './dto/update-hotel.dto';
import { InjectModel } from '@nestjs/sequelize';
import { Hotel } from './hotel.model';

@Injectable()
export class HotelService {
  constructor(@InjectModel(Hotel) private repository: typeof Hotel) {}
  async create(createTourDto: CreateHotelDto) {
    const newHotel = await this.repository.create(createTourDto);
    return newHotel;
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
      throw new HttpException('Hotel is not exists', HttpStatus.NOT_FOUND);
    }
    return data;
  }

  async update(id: number, data: UpdateHotelDto) {
    const updated = await this.repository.update(data, {
      where: { id },
    });
    if (!updated[0]) {
      throw new HttpException('Hotel is not exists', HttpStatus.NOT_FOUND);
    }
    return { message: 'Hotel is updated' };
  }

  async remove(id: number) {
    const data = await this.repository.destroy({ where: { id } });
    if (!data) {
      throw new HttpException('Hotel is not exists', HttpStatus.NOT_FOUND);
    }
    return { message: 'Hotel is deleted' };
  }
}
