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
        type: DataTypes.DOUBLE,
      },
      quant_pedidos: {
        type: DataTypes.INTEGER,
      },
    },);
  },
  down: (queryInterface: QueryInterface) => {
    return queryInterface.dropTable("produto");
  },
};
