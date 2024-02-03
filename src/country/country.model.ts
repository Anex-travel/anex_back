/* eslint-disable prettier/prettier */
import {
  DataType,
  Table,
  Model,
  Column,
  HasMany,
} from 'sequelize-typescript';
import { City } from 'src/city/city.model';
// import { ApiProperty } from '@nestjs/swagger';

@Table({ tableName: 'countries' })
export class Country extends Model<Country> {
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
  name: string;

  @HasMany(()=> City)
  cities:City[]
}
