/* eslint-disable prettier/prettier */
import { DataType, Table, Model, Column, ForeignKey, BelongsTo } from 'sequelize-typescript';
import { City } from 'src/city/city.model';
import { Country } from 'src/country/country.model';
import { Type } from 'src/type/type.model';
// import { ApiProperty } from '@nestjs/swagger';

@Table({ tableName: 'tours' })
export class Tour extends Model<Tour> {
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

  @Column({ type: DataType.DECIMAL })
  stars: number;

  @Column({ type: DataType.INTEGER })
  days: number;

  @Column({ type: DataType.INTEGER })
  nigths: number;

  @Column({ type: DataType.INTEGER })
  price: number;

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

  @ForeignKey(() => Type)
  @Column({ type: DataType.INTEGER })
  type_id: number;
  @BelongsTo(() => Type)
  type: Type[];
}
