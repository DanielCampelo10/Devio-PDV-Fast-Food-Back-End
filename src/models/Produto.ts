import { DataTypes } from "sequelize";
import Conection from "../database/Conection";
import { Pedido } from "./Pedido";

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
          type: DataTypes.DECIMAL,
        },
        quant_pedidos: {
          type: DataTypes.INTEGER,
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