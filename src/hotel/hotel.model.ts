/* eslint-disable prettier/prettier */
import { DataType, Table, Model, Column, ForeignKey, BelongsTo } from 'sequelize-typescript';
import { City } from 'src/city/city.model';
import { Country } from 'src/country/country.model';
// import { ApiProperty } from '@nestjs/swagger';

@Table({ tableName: 'hotels' })
export class Hotel extends Model<Hotel> {
  // @ApiProperty({ example: '1', description: 'Unikal ID' })
  @Column({
    type: DataType.INTEGER,
    unique: true,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  // @ApiProperty({ example: 'Abdulloh', description: 'User name' })
  @Column({ type: DataType.STRING })
  description: string;

  // @ApiProperty({ example: 'admin@gmail.com', description: 'User name' })
  @Column({ type: DataType.STRING })
  sub_description: string;

  // @ApiProperty({ example: 'P@$$w0Rd', description: 'Admin password' })
  @Column({ type: DataType.STRING })
  photo: string;

  @Column({ type: DataType.INTEGER })
  stay_time: number;

  @Column({ type: DataType.INTEGER })
  price: number;

  @Column({ type: DataType.INTEGER })
  guests_count: number;

  @Column({ type: DataType.DECIMAL })
  stars: number;

  @ForeignKey(() => Country)
  @Column({ type: DataType.INTEGER })
  country_id: number;
  @BelongsTo(() => Country)
  country: Country[];

  @ForeignKey(() => City)
  @Column({ type: DataType.INTEGER })
  city_id: number;
  @BelongsTo(() => City)
  city: City[];

}
