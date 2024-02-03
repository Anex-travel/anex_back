/* eslint-disable prettier/prettier */
import {
  DataType,
  Table,
  Model,
  Column,
  BelongsTo,
  ForeignKey,
} from 'sequelize-typescript';
import { Country } from 'src/country/country.model';

@Table({ tableName: 'cities' })
export class City extends Model<City> {
  @Column({
    type: DataType.INTEGER,
    unique: true,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @Column({ type: DataType.STRING })
  name: string;

  @ForeignKey(() => Country)
  @Column({ type: DataType.INTEGER })
  country_id: number;
  @BelongsTo(() => Country)
  country: Country;
}
