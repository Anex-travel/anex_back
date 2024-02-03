/* eslint-disable prettier/prettier */
import { DataType, Table, Model, Column, ForeignKey, BelongsTo } from 'sequelize-typescript';
import { City } from 'src/city/city.model';

@Table({ tableName: 'flights' })
export class Flight extends Model<Flight> {
  @Column({
    type: DataType.INTEGER,
    unique: true,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  // @ForeignKey(() => City)
  @Column({ type: DataType.INTEGER })
  from: number;
  // @BelongsTo(() => City)
  // from_city: City;

  @ForeignKey(() => City)
  @Column({ type: DataType.INTEGER })
  to: number;
  @BelongsTo(() => City)
  to_city: City;

  @Column({ type: DataType.STRING })
  aviation_company: string;

  @Column({ type: DataType.INTEGER })
  price: number;

  @Column({ type: DataType.BOOLEAN })
  is_active: boolean;

  @Column({ type: DataType.DECIMAL })
  stars: number;

  @Column({ type: DataType.STRING })
  type: string;
}
