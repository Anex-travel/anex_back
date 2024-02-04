/* eslint-disable prettier/prettier */
import { DataType, Table, Model, Column, HasMany } from 'sequelize-typescript';
import { User } from 'src/user/user.model';

@Table({ tableName: 'roles' })
export class Role extends Model<Role> {
  @Column({
    type: DataType.INTEGER,
    unique: true,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @Column({ type: DataType.STRING })
  name: string;

  @Column({ type: DataType.STRING })
  description: string;

}
