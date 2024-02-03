import {
  HttpException,
  HttpStatus,
  Injectable,
  InternalServerErrorException,
} from '@nestjs/common';
import { CreateTourDto } from './dto/create-tour.dto';
import { UpdateTourDto } from './dto/update-tour.dto';
import { Tour } from './tours.model';
import { InjectModel } from '@nestjs/sequelize';

@Injectable()
export class ToursService {
  constructor(@InjectModel(Tour) private repository: typeof Tour) {}

  async create(createTourDto: CreateTourDto) {
    try {
      const newTour = await this.repository.create(createTourDto);
      return newTour;
    } catch (error) {
      throw new InternalServerErrorException(error.message);
    }
  }

  async findAll() {
    try {
      const data = await this.repository.findAll({
        include: { all: true },
      });
      return data;
    } catch (err) {
      throw new InternalServerErrorException(err.message);
    }
  }

  async findOne(id: number) {
    try {
      const data = await this.repository.findOne({
        where: { id },
        include: { all: true },
      });
      if (!data) {
        throw new HttpException('Tour is not exists', HttpStatus.NOT_FOUND);
      }
      return data;
    } catch (err) {
      throw new InternalServerErrorException(err.message);
    }
  }

  async update(id: number, data: UpdateTourDto) {
    try {
      const updated = await this.repository.update(data, { where: { id } });
      if (!updated[0]) {
        throw new HttpException('Tour is not exists', HttpStatus.NOT_FOUND);
      }
      return { message: 'Tour is updated' };
    } catch (err) {
      throw new InternalServerErrorException(err.message);
    }
  }

  async remove(id: number) {
    try {
      const data = await this.repository.destroy({ where: { id } });
      if (!data) {
        throw new HttpException('Tour is not exists', HttpStatus.NOT_FOUND);
      }
      return { message: 'Tour is deleted' };
    } catch (error) {
      throw new InternalServerErrorException(error.message);
    }
  }
}
