import { mySqlConection } from "../database";
import { Pedido } from "./Pedido";
import { Produto } from "./Produto";
import { PedidoProduto } from "./PedidoProduto";

const pedido = new Pedido(mySqlConection);
const produto = new Produto(mySqlConection);
const pedidoProduto = new PedidoProduto(mySqlConection);

pedido.instance.belogsToMany(produto, { through: pedidoProduto })
produto.instance.belogsToMany(pedido, { through: pedidoProduto })

export {
  pedido,
  produto,
  pedidoProduto
};