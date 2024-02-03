import {
  HttpException,
  HttpStatus,
  Injectable,
  InternalServerErrorException,
} from '@nestjs/common';
import { CreateCityDto } from './dto/create-city.dto';
import { UpdateCityDto } from './dto/update-city.dto';
import { City } from './city.model';
import { InjectModel } from '@nestjs/sequelize';

@Injectable()
export class CityService {
  constructor(@InjectModel(City) private repository: typeof City) {}

  async create(createCityDto: CreateCityDto) {
    try {
      const newCity = await this.repository.create(createCityDto);
      return newCity;
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
        throw new HttpException('City is not exists', HttpStatus.NOT_FOUND);
      }
      return data;
    } catch (err) {
      throw new InternalServerErrorException(err.message);
    }
  }

  async update(id: number, data: UpdateCityDto) {
    try {
      const updated = await this.repository.update(data, {
        where: { id },
      });
      if (data.country_id == undefined) {
        throw new HttpException('Please type country ID', HttpStatus.NOT_FOUND);
      }
      if (!updated[0]) {
        throw new HttpException('City is not exists', HttpStatus.NOT_FOUND);
      }
      return { message: 'City is updated' };
    } catch (err) {
      throw new InternalServerErrorException(err.message);
    }
  }

  async remove(id: number) {
    try {
      const data = await this.repository.destroy({ where: { id } });
      if (!data) {
        throw new HttpException('City is not exists', HttpStatus.NOT_FOUND);
      }
      return { message: 'City is deleted' };
    } catch (error) {
      throw new InternalServerErrorException(error.message);
    }
  }
}
