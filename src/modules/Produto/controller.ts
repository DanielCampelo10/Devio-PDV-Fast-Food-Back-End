import useCase from "./useCase";
import { Request, Response } from "express";

const controller = {
  async listarMaisVendidos(req: Request, res: Response) {
    try {
      const maisVendidos = await useCase.listarMaisVendidos();
      return res.status(200).json(maisVendidos);
    } catch (error) {
      return res.status(500).json("Ocorreu um erro, chame o gerente!");
    }
  },
  async filtrarProdutos(req: Request, res: Response) {
    try {
      const { texto } = req.body;
      const produtos = await useCase.filtrarProdutos(texto);
      return res.status(200).json(produtos);
    } catch (error) {
      return res.status(500).json("Ocorreu um erro, chame o gerente!");
    }
  },
};

export default controller;
