import { Column, Model, Table } from "sequelize-typescript";

@Table({
   tableName : 'customer',
   timestamps : false,
})
export class Customer extends Model {
    @Column({})
    fullname : string;

    @Column({})
    isActive : boolean;
}
