import { DataTypes } from "sequelize";
import Conection from "../database/Conection";
import { Produto } from "./Produto";

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
          type: DataTypes.DECIMAL,
        },
        status: {
          type: DataTypes.STRING,
        },
        createdAt: {
          type: DataTypes.DATE,
        },
        updatedAt: {
          type: DataTypes.DATE,
        },
      },
      {
        tableName: this.modelName.toLowerCase(),
      }
    );
  }
}