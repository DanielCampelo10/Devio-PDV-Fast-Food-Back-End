import { pedido, pedidoProduto, produto } from "../../models";
import { PedidoProduto } from "../../models/PedidoProduto";
import { Produto } from "../../models/Produto";

const useCase = {
  async criar(nome: string) {
    const novoPedido = await pedido.instance.create({
      nome,
      status: "pendente",
      include: [{model: produto, as: "itens", through: { attributes: [] }}]
    });
    return novoPedido;
  },
  
  async adicionarProduto(id_pedido: any, id_produto: any, quantidade: number) {
    const produtoAdicionado = await produto.instance.findOne({
      where: {'id': id_produto}
    })
    const novoItem = await pedidoProduto.instance.create({
      id_pedido: parseInt(id_pedido),
      id_produto: parseInt(id_produto),
      quantidade: quantidade,
      valor_vendido: produtoAdicionado.valor,
    });
    return novoItem;
  },
  
  async verCarrinho(id_pedido: any) {
    const carrinho = await pedidoProduto.instance.findAll({
      where: {'id_pedido': id_pedido}
    });
    
    
    // const carrinho = await pedido.instance.findOne({
    //   where: {'id': id_pedido},
    // });
    return carrinho;
  },

  async removerProduto() {
    const pedidoAtualizado = await pedido.instance.update({

    });
    return pedidoAtualizado;
  },
  async listarTodos() {
    const pedidos = await pedido.instance.findAll({

    });
    return pedidos;
  },
  async listarPorStatus() {
    const pedidos = await pedido.instance.findAll({

    });
    return pedidos;
  },
  async mudarStatus() {
    const pedidoAtualizado = await pedido.instance.update({

    });
    return pedidoAtualizado;
  },
}
export default useCase;