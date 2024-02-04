/* eslint-disable prettier/prettier */
import {
  DataType,
  Table,
  Model,
  Column,
  ForeignKey,
  BelongsTo,
  HasOne,
  HasMany,
} from 'sequelize-typescript';
import { Tour } from 'src/tours/tours.model';
import { User } from 'src/user/user.model';

@Table({ tableName: 'orders' })
export class Order extends Model<Order> {
  @Column({
    type: DataType.INTEGER,
    unique: true,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @Column({ type: DataType.INTEGER })
  total_price: number;

  @ForeignKey(() => User)
  @Column({ type: DataType.INTEGER })
  user_id: number;
  @BelongsTo(() => User)
  user: User[];

  @ForeignKey(() => Tour)
  @Column({ type: DataType.INTEGER, allowNull: true })
  tour_id: number;
  @BelongsTo(() => Tour)
  tours: Tour[];

}
