import { Router } from "express";
import { CreateRetiradaEncomendaController } from "../../modules/retiradaEncomenda/useCases/createRetiradaEncomenda/CreateRetiradaEncomendaController";
import { FindRetiradaEncomendaByIdController } from "../../modules/retiradaEncomenda/useCases/findRetiradaEncomenda/FindRetiradaEncomendaByIdController";
import { UpdateRetiradaEncomendaByIdController } from "../../modules/retiradaEncomenda/useCases/updateRetiradaEncomenda/UpdateRetiradaEncomendaByIdController";
import { DeleteRetiradaEncomendaController } from "../../modules/retiradaEncomenda/useCases/deleteRetiradaEncomenda/DeleteRetiradaEncomendaController";


export const retiradaEncomendaRoutes = Router();

const createRetiradaEncomendaController = new CreateRetiradaEncomendaController();
const findRetiradaEncomendaByIdController = new FindRetiradaEncomendaByIdController();
const updateRetiradaEncomendaByIdController = new UpdateRetiradaEncomendaByIdController();
const deleteRetiradaEncomendaController = new DeleteRetiradaEncomendaController();

retiradaEncomendaRoutes.post("/", createRetiradaEncomendaController.handle);

retiradaEncomendaRoutes.get("/:id", findRetiradaEncomendaByIdController.handle);

retiradaEncomendaRoutes.put("/:id", updateRetiradaEncomendaByIdController.handle);

retiradaEncomendaRoutes.delete("/:id", deleteRetiradaEncomendaController.handle);

