import { Router } from "express";
import controller from "./controller"

const routes = Router();

routes.post("/pedido", controller.criar)
routes.post("/pedido/:id_pedido/produto/:id_produto", controller.adicionarProduto)
routes.get("/pedido/:id", controller.verCarrinho)

export default routes;