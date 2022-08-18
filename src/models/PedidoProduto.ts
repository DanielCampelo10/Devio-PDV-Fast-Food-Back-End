import { DataTypes } from "sequelize";
import Conection from "../database/Conection";

export class PedidoProduto {
  instance: any;
  modelName: string = "Pedido-Produto";

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
        id_pedido: {
          type: DataTypes.INTEGER,
          references: { model: "pedido", key: "id" },
        },
        id_produto: {
          type: DataTypes.INTEGER,
          references: { model: "produto", key: "id" },
        },
        quantidade: {
          type: DataTypes.INTEGER,
        },
        valor_vendido: {
          type: DataTypes.NUMBER,
        },
      },
      {
        tableName: this.modelName.toLowerCase(),
        timestamps: true,
      }
    );
  }
}