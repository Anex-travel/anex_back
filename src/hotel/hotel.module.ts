/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { HotelService } from './hotel.service';
import { HotelController } from './hotel.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Hotel } from './hotel.model';

@Module({
  imports:[SequelizeModule.forFeature([Hotel])],
  controllers: [HotelController],
  providers: [HotelService],
  exports:[HotelService],
})
export class HotelModule {}
