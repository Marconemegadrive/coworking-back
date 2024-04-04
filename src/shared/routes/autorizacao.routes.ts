import { Router } from "express";
import { CreateTipoAutorizacaoController } from "../../modules/autorizacao/useCases/createTipoAutorizacao/CreateTipoAutorizacaoController";
import { DeleteTipoAutorizacaoController } from "../../modules/autorizacao/useCases/deleteTipoAutorizacao/DeleteTipoAutorizacaoController";
import { FindTipoAutorizacaoByIdController } from "../../modules/autorizacao/useCases/findTipoAutorizacao/FindTipoAutorizacaoByIdController";
import { ListTipoAutorizacaoController } from "../../modules/autorizacao/useCases/listTipoAutorizacao/ListTipoAutorizacaoController";
import { UpdateTipoAutorizacaoController } from "../../modules/autorizacao/useCases/updateTipoAutorizacao/UpdateTipoAutorizacaoController";


const autorizacaoRoutes = Router();

const createAutorizacaoController = new CreateTipoAutorizacaoController();
const listAutorizacaoController = new ListTipoAutorizacaoController();
const findAutorizacaoController = new FindTipoAutorizacaoByIdController();
const updateAutorizacaoController = new UpdateTipoAutorizacaoController();
const deleteAutorizacaoController = new DeleteTipoAutorizacaoController();

autorizacaoRoutes.post("/", createAutorizacaoController.handle);
autorizacaoRoutes.get("/", listAutorizacaoController.handle);
autorizacaoRoutes.get("/:id", findAutorizacaoController.handle);
autorizacaoRoutes.put("/:id", updateAutorizacaoController.handle);
autorizacaoRoutes.delete("/", deleteAutorizacaoController.handle);

export { autorizacaoRoutes };