import { QueryInterface, DataTypes } from "sequelize";
export default {
  up: (queryInterface: QueryInterface) => {
    return queryInterface.createTable("produto", {
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
        type: DataTypes.DATE(),
      },
      updatedAt: {
        type: DataTypes.DATE(),
      },
    },);
  },
  down: (queryInterface: QueryInterface) => {
    return queryInterface.dropTable("produto");
  },
};
