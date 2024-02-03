/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { CityService } from './city.service';
import { CityController } from './city.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { City } from './city.model';

@Module({
  imports:[SequelizeModule.forFeature([City])],
  controllers: [CityController],
  providers: [CityService],
  exports:[CityService]
})
export class CityModule {}
