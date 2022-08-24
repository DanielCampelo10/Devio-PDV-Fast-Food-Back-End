import { mySqlConection } from "../database";
import { Pedido } from "./Pedido";
import { Produto } from "./Produto";
import { PedidoProduto } from "./PedidoProduto";

const pedido = new Pedido(mySqlConection);
const produto = new Produto(mySqlConection);
const pedidoProduto = new PedidoProduto(mySqlConection);

// pedido.belongsToMany(produto, { foreignKey: "id_pedido", through: pedidoProduto });
// produto.belongsToMany(pedido, { foreignKey: "id_pedido", through: pedidoProduto });

export {
  pedido,
  produto,
  pedidoProduto
};