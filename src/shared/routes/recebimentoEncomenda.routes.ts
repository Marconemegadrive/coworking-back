import { Router } from "express";
import { CreateRecebimentoEncomendaController } from "../../modules/recebimentoEncomenda/useCases/createRecebimentoEncomenda/CreateRecebimentoEncomendaController";
import { FindRecebimentoEncomendaByIdController } from "../../modules/recebimentoEncomenda/useCases/findRecebimentoEncomenda/FindRecebimentoEncomendaByIdController";
import { UpdateRecebimentoEncomendaByIdController } from "../../modules/recebimentoEncomenda/useCases/updateRecebimentoEncomendaById/UpdateRecebimentoEncomendaByIdController";
import { DeleteRecebimentoEncomendaController } from "../../modules/recebimentoEncomenda/useCases/deleteRecebimentoEncomenda/DeleteRecebimentoEncomendaController";


export const recebimentoEncomendaRoutes = Router();

const createRecebimentoEncomendaController = new CreateRecebimentoEncomendaController();
const findRecebimentoEncomendaByIdController = new FindRecebimentoEncomendaByIdController();
const updateRecebimentoEncomendaByIdController = new UpdateRecebimentoEncomendaByIdController();
const deleteRecebimentoEncomendaController = new DeleteRecebimentoEncomendaController();

recebimentoEncomendaRoutes.post("/", createRecebimentoEncomendaController.handle);

recebimentoEncomendaRoutes.get("/:id", findRecebimentoEncomendaByIdController.handle);

recebimentoEncomendaRoutes.put("/:id", updateRecebimentoEncomendaByIdController.handle);

recebimentoEncomendaRoutes.delete("/:id", deleteRecebimentoEncomendaController.handle);

