import { Router } from "express";
import { CreateTipoContratoController } from "../../modules/tipoContrato/useCases/CreateTipoContrato/CreateTipoContratoController";
import { ListTipoContratoController } from "../../modules/tipoContrato/useCases/ListTipoContrato/ListTipoContratoController";
import { FindTipoContratoByIdController } from "../../modules/tipoContrato/useCases/FindTipoContratoById/FindTipoContratoByIdController";
import { UpdateTipoContratoController } from "../../modules/tipoContrato/useCases/UpdateTipoContrato/UpdateTipoContratoController";
import { DeleteTipoContratoController } from "../../modules/tipoContrato/useCases/DeleteTipoContrato/DeleteTipoContratoController";

const tipoContratoRoutes = Router();

const createTipoContratoController = new CreateTipoContratoController();
const listTipoContratoController = new ListTipoContratoController();
const findTipoContratoByIdController = new FindTipoContratoByIdController();
const updateTipoContratoController = new UpdateTipoContratoController();
const deleteTipoContratoController = new DeleteTipoContratoController();


tipoContratoRoutes.post("/", createTipoContratoController.handle);

tipoContratoRoutes.get("/", listTipoContratoController.handle);

tipoContratoRoutes.get("/:id", findTipoContratoByIdController.handle);

tipoContratoRoutes.put("/:id", updateTipoContratoController.handle);

tipoContratoRoutes.delete("/:id", deleteTipoContratoController.handle);

export { tipoContratoRoutes };