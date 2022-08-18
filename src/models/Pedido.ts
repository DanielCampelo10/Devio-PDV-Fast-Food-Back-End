import { DataTypes } from "sequelize";
import Conection from "../database/Conection";

export class Pedido {
  instance: any;
  modelName: string = "Pedido";

  constructor(conexao: Conection) {
    const con = conexao.getInstance();

    this.instance = con.define(
      this.modelName,
      {
        id: {
          type: DataTypes.INTEGER,
          primaryKey: true,
          autoIncrement: true,
        },
        nome: {
          type: DataTypes.STRING,
        },
        valor: {
          type: DataTypes.NUMBER,
        },
        status: {
          type: DataTypes.ENUM,
        },
      },
      {
        tableName: this.modelName.toLowerCase(),
        timestamps: true,
      }
    );
  }
}