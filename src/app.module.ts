/* eslint-disable prettier/prettier */

import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { SequelizeModule } from '@nestjs/sequelize';
import { UserModule } from './user/user.module';
import { ToursModule } from './tours/tours.module';
import { RolesModule } from './roles/roles.module';
import { CountryModule } from './country/country.module';
import { CityModule } from './city/city.module';
import { HotelModule } from './hotel/hotel.module';
import { FlightModule } from './flight/flight.module';
import { MediaModule } from './media/media.module';
import { ServeStaticModule } from '@nestjs/serve-static';
import { resolve } from 'path';
import { TypeModule } from './type/type.module';
import { OrderModule } from './order/order.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    ServeStaticModule.forRoot({
      rootPath: resolve(__dirname, 'static'),
    }),
    SequelizeModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: (configService: ConfigService) => ({
        dialect: 'postgres',
        host: configService.getOrThrow('POSTGRES_HOST'),
        port: +configService.getOrThrow('POSTGRES_PORT'),
        username: configService.getOrThrow('POSTGRES_USER') as string,
        password: configService.getOrThrow('POSTGRES_PASSWORD') as string,
        database: configService.getOrThrow('POSTGRES_DB'),
        autoLoadModels: true,
        logging: false,
      }),
      inject: [ConfigService],
    }),
    UserModule,
    ToursModule,
    RolesModule,
    CountryModule,
    CityModule,
    HotelModule,
    FlightModule,
    MediaModule,
    TypeModule,
    OrderModule,
    AuthModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
