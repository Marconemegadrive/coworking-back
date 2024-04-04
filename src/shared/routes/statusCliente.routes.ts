import { Router } from "express";
import { CreateStatusClienteController } from "../../modules/cliente/useCases/createStatusCliente/CreateStatusClienteController";
import { ListStatusClienteController } from "../../modules/cliente/useCases/listStatusCliente/ListStatusClienteController";
import { FindStatusClienteByIdController } from "../../modules/cliente/useCases/findStatusClienteById/FindStatusClienteByIdController";
import { UpdateStatusClienteController } from "../../modules/cliente/useCases/updateStatusCliente/UpdateStatusClienteController";
import { DeleteStatusClienteController } from "../../modules/cliente/useCases/deleteStatusCliente/DeleteStatusClienteController";

const statusClienteRoutes = Router();

const createStatusClienteController = new CreateStatusClienteController();
const listStatusClienteController = new ListStatusClienteController();
const findStatusClienteByIdController = new FindStatusClienteByIdController();
const updateStatusClienteController = new UpdateStatusClienteController();
const deleteStatusClienteController = new DeleteStatusClienteController();

statusClienteRoutes.post("/", createStatusClienteController.handle);
statusClienteRoutes.get("/", listStatusClienteController.handle);
statusClienteRoutes.get("/:id", findStatusClienteByIdController.handle);
statusClienteRoutes.put("/:id", updateStatusClienteController.handle);
statusClienteRoutes.delete("/:id", deleteStatusClienteController.handle);

export { statusClienteRoutes };