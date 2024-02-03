import {
  HttpException,
  HttpStatus,
  Injectable,
  InternalServerErrorException,
} from '@nestjs/common';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';
import { InjectModel } from '@nestjs/sequelize';
import { Order } from './order.model';

@Injectable()
export class OrderService {
  constructor(@InjectModel(Order) private repository: typeof Order) {}
  async create(createOrderDto: CreateOrderDto) {
    try {
      const newOrder = await this.repository.create(createOrderDto);
      // if(newOrder.total_price == null){
      //   totalPrice = newOrder.
      // }
      console.log(newOrder);
      return newOrder;
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
        throw new HttpException('Order is not exists', HttpStatus.NOT_FOUND);
      }
      return data;
    } catch (err) {
      throw new InternalServerErrorException(err.message);
    }
  }

  async update(id: number, data: UpdateOrderDto) {
    try {
      const updated = await this.repository.update(data, { where: { id } });
      if (!updated[0]) {
        throw new HttpException('Order is not exists', HttpStatus.NOT_FOUND);
      }
      return { message: 'Order is updated' };
    } catch (err) {
      throw new InternalServerErrorException(err.message);
    }
  }

  async remove(id: number) {
    try {
      const data = await this.repository.destroy({ where: { id } });
      if (!data) {
        throw new HttpException('Order is not exists', HttpStatus.NOT_FOUND);
      }
      return { message: 'Order is deleted' };
    } catch (error) {
      throw new InternalServerErrorException(error.message);
    }
  }
}
