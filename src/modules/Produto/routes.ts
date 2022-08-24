import { Router } from "express";
import controller from "./controller"

const routes = Router();

routes.get("/maisvendidos", controller.listarMaisVendidos);
routes.get("/busca", controller.filtrarProdutos);

export default routes;