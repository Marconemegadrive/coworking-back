import { Router } from "express";
import { ListContratoController } from "../../modules/contrato/useCases/listContrato/ListContratoController";
import { CreateContratoController } from "../../modules/contrato/useCases/createContrato/CreateContratoController";
import { FindContratoByIdController } from "../../modules/contrato/useCases/findContratoById/FindContratoByIdController";
import { UpdateContratoController } from "../../modules/contrato/useCases/updateContrato/UpdateContratoController";
import { DeleteContratoController } from "../../modules/contrato/useCases/deleteContrato/DeleteContratoController";

const contratoRoutes = Router();

const listContratoController = new ListContratoController();
const createContratoController = new CreateContratoController();
const findContratoByIdController = new FindContratoByIdController();
const updateContratoController = new UpdateContratoController();
const deleteContratoController = new DeleteContratoController();

contratoRoutes.get("/", listContratoController.handle);

contratoRoutes.post("/", createContratoController.handle);

contratoRoutes.get("/:id", findContratoByIdController.handle);

contratoRoutes.put("/:id", updateContratoController.handle);

contratoRoutes.delete("/:id", deleteContratoController.handle);



export { contratoRoutes };