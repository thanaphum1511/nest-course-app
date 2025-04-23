import { Column, DataType, Model, Table } from "sequelize-typescript";
import { CreateMusicshopDto } from "../dto/create-musicshop.dto";

@Table({
    tableName: 'music_shop',
    timestamps: false,
})

export class Musicshop extends Model<Musicshop, CreateMusicshopDto> {
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
