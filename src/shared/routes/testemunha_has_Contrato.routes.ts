import { Router } from "express";
import { CreateTestemunha_has_ContratoController } from "../../modules/testemunha_has_contrato/useCases/createTestemunha_has_Contrato/CreateTestemunha_has_ContratoController";
import { ListTestemunha_has_ContratoController } from "../../modules/testemunha_has_contrato/useCases/listTestemunha_has_Contrato/ListTestemunha_has_ContratoController";
import { FindTestemunha_has_ContratoController } from "../../modules/testemunha_has_contrato/useCases/findTestemunha_has_Contrato/FindTestemunha_has_ContratoController";
import { DeleteTestemunha_has_ContratoController } from "../../modules/testemunha_has_contrato/useCases/deleteTestemunha_has_Contrato/DeleteTestemunha_has_ContratoController";


const testemunha_has_ContratoRoutes = Router();

const createTestemunha_has_ContratoController = new CreateTestemunha_has_ContratoController();
const listTestemunha_has_ContratoController = new ListTestemunha_has_ContratoController();
const findTestemunha_has_ContratoController = new FindTestemunha_has_ContratoController();
const deleteTestemunha_has_ContratoController = new DeleteTestemunha_has_ContratoController();

testemunha_has_ContratoRoutes.post("/", createTestemunha_has_ContratoController.handle);
testemunha_has_ContratoRoutes.get("/", listTestemunha_has_ContratoController.handle);
testemunha_has_ContratoRoutes.get("/:id", findTestemunha_has_ContratoController.handle);
testemunha_has_ContratoRoutes.delete("/:Testemunha_idTestemunha/:Contrato_idContrato", deleteTestemunha_has_ContratoController.handle);

export { testemunha_has_ContratoRoutes };