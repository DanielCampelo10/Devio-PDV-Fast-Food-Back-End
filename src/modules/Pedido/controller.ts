import useCase from "./useCase";
import { Request, Response } from "express";
import { produto } from "../../models";

const controller = {
  async criar(req: Request, res: Response) {
    try {
      const { nome } = req.body

      const novoPedido = await useCase.criar(nome);
      return res.status(200).json(novoPedido);
    } catch (error) {
      return res.status(500).json("Ocorreu um erro, chame o gerente!");
    }
  },
  async adicionarProduto(req: Request, res: Response) {
    try {
      const { id_pedido } = req.params;
      const { id_produto } = req.params;
      const { quantidade } = req.body;
      
      const novoItem = await useCase.adicionarProduto(id_pedido, id_produto, quantidade);
      return res.status(200).json(novoItem);
    } catch (error) {
      return res.status(500).json("Ocorreu um erro, chame o gerente!");
    }
  },
  async verCarrinho(req: Request, res: Response) {
    try {
      const { id } = req.params

      const carrinho = await useCase.verCarrinho(id);
      return res.status(200).json(carrinho);
    } catch (error) {
      return res.status(500).json("Ocorreu um erro, chame o gerente!");
    }
  },
};

export default controller;