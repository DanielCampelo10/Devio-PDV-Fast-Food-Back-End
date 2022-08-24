import { produto } from "../../models";
const { Op } = require("sequelize");

const useCase = {
  async listarMaisVendidos() {
    const maiVendidos = await produto.instance.findAll({
      order: [
        ['quant_pedidos', 'DESC']
      ],
      limit: 10,
    });
    return maiVendidos;
  },
  async filtrarProdutos(texto: any) {
    
    const codigoCount = await produto.instance.count({
      where: {'codigo': texto}
    });
    if (codigoCount){
      const produtos = await produto.instance.findOne({
        where: {'codigo': texto}
      });
      return produtos;
    }

    const categoriaCount = await produto.instance.count({
      where: {'categoria': texto}
    }); 
    if (categoriaCount){
      const categoria = await produto.instance.findAll({
        where: {'categoria': texto}
      });   
      return categoria;
    }

    const nomeCount = await produto.instance.count({
      where: {'nome':{[Op.like]: '%' + texto + '%'}}
    });
    if (nomeCount){
      const nome = await produto.instance.findAll({
      where: {'nome':{[Op.like]: '%' + texto + '%'}}
    });
      return nome;
    }

    throw new Error();
  }
}
export default useCase;