import { Router } from "express";
import { ListTipoSalasController } from "../../modules/salas/useCases/listTipoSalas/ListTipoSalasController";
import { CreateTipoSalasController } from "../../modules/salas/useCases/createTipoSalas/CreateTipoSalasController";
import { FindTipoAutorizacaoByIdController } from "../../modules/autorizacao/useCases/findTipoAutorizacao/FindTipoAutorizacaoByIdController";
import { UpdateTipoAutorizacaoController } from "../../modules/autorizacao/useCases/updateTipoAutorizacao/UpdateTipoAutorizacaoController";
import { DeleteTipoAutorizacaoController } from "../../modules/autorizacao/useCases/deleteTipoAutorizacao/DeleteTipoAutorizacaoController";

const tipoSalasRoutes = Router();

const createTipoSalasController = new CreateTipoSalasController();
const listTipoSalasController = new ListTipoSalasController();
const findTipoAutorizacaoByIdController = new FindTipoAutorizacaoByIdController();
const updateTipoAutorizacaoController = new UpdateTipoAutorizacaoController();
const deleteTipoAutorizacaoController = new DeleteTipoAutorizacaoController();


tipoSalasRoutes.post("/", createTipoSalasController.handle);
tipoSalasRoutes.get("/", listTipoSalasController.handle);
tipoSalasRoutes.get("/:id", findTipoAutorizacaoByIdController.handle);
tipoSalasRoutes.put("/:id", updateTipoAutorizacaoController.handle);
tipoSalasRoutes.delete("/", deleteTipoAutorizacaoController.handle);

export { tipoSalasRoutes};