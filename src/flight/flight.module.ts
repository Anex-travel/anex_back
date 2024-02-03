/* eslint-disable prettier/prettier */
import { SequelizeModule } from '@nestjs/sequelize';
import { Module } from '@nestjs/common';
import { FlightService } from './flight.service';
import { FlightController } from './flight.controller';
import { Flight } from './flight.model';

@Module({
  imports: [SequelizeModule.forFeature([Flight])],
  controllers: [FlightController],
  providers: [FlightService],
  exports: [FlightService],
})
export class FlightModule {} 
