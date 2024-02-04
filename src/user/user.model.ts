/* eslint-disable prettier/prettier */
import {
  DataType,
  Table,
  Model,
  Column,
  BelongsTo,
  ForeignKey,
  HasOne,
} from 'sequelize-typescript';
import { Role } from 'src/roles/roles.model';
// import { ApiProperty } from '@nestjs/swagger';

@Table({ tableName: 'users' })
export class User extends Model<User> {
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
  fullname: string;

  // @ApiProperty({ example: 'P@$$w0Rd', description: 'Admin password' })
  @Column({
    type: DataType.STRING,
    unique: true,
    allowNull: false,
  })
  phone: string;

  @Column({ 
    type: DataType.STRING,
    allowNull: false,
  })
  password: string;

  @Column({ type: DataType.INTEGER })
  salary: number;

  @ForeignKey(() => Role)
  @Column({ type: DataType.INTEGER })
  role_id: number;
  @BelongsTo(() => Role)
  role: Role[];
}