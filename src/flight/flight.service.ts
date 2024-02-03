import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateFlightDto } from './dto/create-flight.dto';
import { UpdateFlightDto } from './dto/update-flight.dto';
import { InjectModel } from '@nestjs/sequelize';
import { Flight } from './flight.model';

@Injectable()
export class FlightService {
  constructor(@InjectModel(Flight) private repository: typeof Flight) {}
  async create(createTourDto: CreateFlightDto) {
    const newFlight = await this.repository.create(createTourDto);
    return newFlight;
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
      throw new HttpException('Flight is not exists', HttpStatus.NOT_FOUND);
    }
    return data;
  }

  async update(id: number, data: UpdateFlightDto) {
    const updated = await this.repository.update(data, {
      where: { id },
    });
    if (!updated[0]) {
      throw new HttpException('Flight is not exists', HttpStatus.NOT_FOUND);
    }
    return { message: 'Flight is updated' };
  }

  async remove(id: number) {
    const data = await this.repository.destroy({ where: { id } });
    if (!data) {
      throw new HttpException('Flight is not exists', HttpStatus.NOT_FOUND);
    }
    return { message: 'Flight is deleted' };
  }
}
