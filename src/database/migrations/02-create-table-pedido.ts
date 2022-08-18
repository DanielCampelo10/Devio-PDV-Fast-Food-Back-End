import { QueryInterface, DataTypes } from "sequelize";
export default {
  up: (queryInterface: QueryInterface) => {
    return queryInterface.createTable("pedido", {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      nome: {
        type: DataTypes.STRING,
      },
      valor: {
        type: DataTypes.DOUBLE,
      },
      status: {
        type: DataTypes.STRING,
      },
    },);
  },
  down: (queryInterface: QueryInterface) => {
    return queryInterface.dropTable("pedido");
  },
};
