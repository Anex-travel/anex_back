import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateCountryDto } from './dto/create-country.dto';
import { UpdateCountryDto } from './dto/update-country.dto';
import { Country } from './country.model';
import { InjectModel } from '@nestjs/sequelize';

@Injectable()
export class CountryService {
  constructor(@InjectModel(Country) private repository: typeof Country) {}

  async create(createCountryDto: CreateCountryDto) {
    const newCountry = await this.repository.create(createCountryDto);
    return newCountry;
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
      throw new HttpException('Country is not exists', HttpStatus.NOT_FOUND);
    }
    return data;
  }

  async update(id: number, data: UpdateCountryDto) {
    const updated = await this.repository.update(data, {
      where: { id },
    });
    if (!updated[0]) {
      throw new HttpException('Country is not exists', HttpStatus.NOT_FOUND);
    }
    return { message: 'Country is updated' };
  }

  async remove(id: number) {
    const data = await this.repository.destroy({ where: { id } });
    if (!data) {
      throw new HttpException('Country is not exists', HttpStatus.NOT_FOUND);
    }
    return { message: 'Country is deleted' };
  }
}
