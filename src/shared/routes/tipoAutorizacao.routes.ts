import { Router } from "express";
import { ListTipoAutorizacaoController } from "../../modules/autorizacao/useCases/listTipoAutorizacao/ListTipoAutorizacaoController";
import { CreateTipoAutorizacaoController } from "../../modules/autorizacao/useCases/createTipoAutorizacao/CreateTipoAutorizacaoController";
import { FindTipoAutorizacaoByIdController} from "../../modules/autorizacao/useCases/findTipoAutorizacao/FindTipoAutorizacaoByIdController";
import { UpdateTipoAutorizacaoController } from "../../modules/autorizacao/useCases/updateTipoAutorizacao/UpdateTipoAutorizacaoController";
import { DeleteTipoAutorizacaoController } from "../../modules/autorizacao/useCases/deleteTipoAutorizacao/DeleteTipoAutorizacaoController";

const tipoAutorizacaoRouter = Router();

const createTipoAutorizacaoController = new CreateTipoAutorizacaoController();
const listTipoAutorizacaoController = new ListTipoAutorizacaoController();
const findTipoAutorizacaoByIdController = new FindTipoAutorizacaoByIdController();
const updateTipoAutorizacaoController = new UpdateTipoAutorizacaoController();
const deleteTipoAutorizacaoController = new DeleteTipoAutorizacaoController();


tipoAutorizacaoRouter.post("/", createTipoAutorizacaoController.handle);
tipoAutorizacaoRouter.get("/", listTipoAutorizacaoController.handle);
tipoAutorizacaoRouter.get("/:id", findTipoAutorizacaoByIdController.handle);
tipoAutorizacaoRouter.put("/:id", updateTipoAutorizacaoController.handle); 
tipoAutorizacaoRouter.delete("/:id", deleteTipoAutorizacaoController.handle);

export { tipoAutorizacaoRouter};