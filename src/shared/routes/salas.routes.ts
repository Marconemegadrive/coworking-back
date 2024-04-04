import { Router } from "express";
import { CreateSalasController } from "../../modules/salas/useCases/createSalas/CreateSalasController";
import { ListSalasController } from "../../modules/salas/useCases/listSalas/ListSalasController";
import { FindSalasByIdController } from "../../modules/salas/useCases/findSalas/FindSalasByIdController";
import { UpdateSalasController } from "../../modules/salas/useCases/updateSalas/UpdateSalasController";
import { DeleteSalasController } from "../../modules/salas/useCases/deleteSalas/DeleteSalasController";


const salasRoutes = Router();

const createSalasController = new CreateSalasController();
const listSalasController = new ListSalasController();
const findSalasByIdController = new FindSalasByIdController();
const updateSalasController = new UpdateSalasController();
const deleteSalasController = new DeleteSalasController();

salasRoutes.post("/", createSalasController.handle);
salasRoutes.get("/", listSalasController.handle);
salasRoutes.get("/:id", findSalasByIdController.handle);
salasRoutes.put("/:id", updateSalasController.handle);
salasRoutes.delete("/:id", deleteSalasController.handle);

export { salasRoutes };