import { DataTypes } from "sequelize";
import Conection from "../database/Conection";

export class PedidoProduto {
  instance: any;
  modelName: string = "Pedido_Produto";

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
          references: { model: "Pedido", key: "id" },
        },
        id_produto: {
          type: DataTypes.INTEGER,
          references: { model: "Produto", key: "id" },
        },
        quantidade: {
          type: DataTypes.INTEGER,
        },
        valor_vendido: {
          type: DataTypes.DECIMAL,
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