/* eslint-disable prettier/prettier */
import { Column, DataType, Model, Table } from "sequelize-typescript";
import { CreateMusicstoreDto } from "../dto/create-musicstore.dto";

@Table({
  tableName: 'music_store',
  timestamps: false,
})
export class MusicStore extends Model<MusicStore, CreateMusicstoreDto> {
  @Column({
    type: DataType.STRING(200),
    allowNull: false,
  })
  music_name: string;

  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  price: number;

  @Column({
    type: DataType.BOOLEAN,
    defaultValue: false,
  })
  is_new: boolean;

  @Column({
    type: DataType.STRING(100),
    allowNull: false,
  })
  brand: string;
}