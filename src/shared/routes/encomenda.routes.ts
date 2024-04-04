import { Router } from "express";
import { CreateEncomendaController } from "../../modules/encomenda/useCases/createEncomenda/CreateEncomendaController";
import { FindEncomendaByIdController } from "../../modules/encomenda/useCases/findEncomendaById/FindEncomendaByIdController";
import { UpdateEncomendaByIdController } from "../../modules/encomenda/useCases/updateEncomendaById/UpdateEncomendaByIdController";
import { DeleteEncomendaController } from "../../modules/encomenda/useCases/deleteEncomenda/DeleteEncomendaController";


export const encomendaRoutes = Router();

const createEncomendaController = new CreateEncomendaController();
const findEncomendaByIdController = new FindEncomendaByIdController();
const updateEncomendaByIdController = new UpdateEncomendaByIdController();
const deleteEncomendaController = new DeleteEncomendaController();

encomendaRoutes.post("/", createEncomendaController.handle);

encomendaRoutes.get("/:id", findEncomendaByIdController.handle);

encomendaRoutes.put("/:id", updateEncomendaByIdController.handle);

encomendaRoutes.delete("/:id", deleteEncomendaController.handle);
