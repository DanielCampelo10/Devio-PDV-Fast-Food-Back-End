import { QueryInterface, DataTypes } from "sequelize";
export default {
  up: (queryInterface: QueryInterface) => {
    return queryInterface.createTable("pedido-produto", {
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
        type: DataTypes.DOUBLE,
      },
    },);
  },
  down: (queryInterface: QueryInterface) => {
    return queryInterface.dropTable("pedido-produto");
  },
};
