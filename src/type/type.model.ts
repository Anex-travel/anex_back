/* eslint-disable prettier/prettier */
import {
  DataType,
  Table,
  Model,
  Column,
  BelongsTo,
  ForeignKey,
  HasMany,
} from 'sequelize-typescript';
import { Role } from 'src/roles/roles.model';
import { Tour } from 'src/tours/tours.model';
// import { ApiProperty } from '@nestjs/swagger';

@Table({ tableName: 'types' })
export class Type extends Model<Type> {
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

  // @ApiProperty({ example: 'admin@gmail.com', description: 'User name' })
  @Column({ type: DataType.INTEGER })
  days: number;

  // @ApiProperty({ example: 'P@$$w0Rd', description: 'Admin password' })
  @Column({ type: DataType.INTEGER })
  price: number;

  @Column({ type: DataType.STRING })
  description: string;
 
  @HasMany(()=>Tour)
  tours:Tour[]
  // hasMany tours
}
