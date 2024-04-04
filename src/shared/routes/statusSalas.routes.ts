import { Router } from "express";

import { CreateStatusSalasController } from "../../modules/salas/useCases/createStatusSalas/CreateStatusSalasController";
import { ListStatusSalasController } from "../../modules/salas/useCases/listStatusSalas/ListStatusSalasRepository";
import { FindStatusSalasByIdController } from "../../modules/salas/useCases/findStatusSalas/FindStatusSalasByIdController";
import { UpdateStatusSalasController } from "../../modules/salas/useCases/updateStatusSalas/UpdateStatusSalasController";
import { DeleteStatusSalasController } from "../../modules/salas/useCases/deleteStatusSalas/DeleteStatusSalasController";


const statusSalasRoutes = Router();

const createStatusSalasController = new CreateStatusSalasController();
const listStatusSalasController = new ListStatusSalasController();
const findStatusSalasByIdController = new FindStatusSalasByIdController();
const updateStatusSalasController = new UpdateStatusSalasController();
const deleteStatusSalasController = new DeleteStatusSalasController();

statusSalasRoutes.post("/", createStatusSalasController.handle);
statusSalasRoutes.get("/", listStatusSalasController.handle);
statusSalasRoutes.get("/:id", findStatusSalasByIdController.handle);
statusSalasRoutes.put("/:id", updateStatusSalasController.handle);
statusSalasRoutes.delete("/:id", deleteStatusSalasController.handle);

export { statusSalasRoutes };