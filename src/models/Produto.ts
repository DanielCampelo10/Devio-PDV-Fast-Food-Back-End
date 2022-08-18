import { DataTypes } from "sequelize";
import Conection from "../database/Conection";

export class Produto {
  instance: any;
  modelName: string = "Produto";

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
        codigo: {
          type: DataTypes.INTEGER,
        },
        nome: {
          type: DataTypes.STRING,
        },
        categoria: {
          type: DataTypes.STRING,
        },
        foto: {
          type: DataTypes.STRING,
        },
        valor: {
          type: DataTypes.NUMBER,
        },
        quant_pedidos: {
          type: DataTypes.INTEGER,
        },
      },
      {
        tableName: this.modelName.toLowerCase(),
        timestamps: true,
      }
    );
  }
}