import { Router } from "express";

import { FindNivelAcessoByIdController } from "../../modules/usuario/useCases/findNivelAcessoById/FindNivelAcessoByIdController";
import { ListNivelAcessoController } from "../../modules/usuario/useCases/listNivelAcesso/ListNivelAcessoController";
import { UpdateNivelAcessoController } from "../../modules/usuario/useCases/updateNivelAcesso/UpdateNivelAcessoController";
import { DeleteNivelAcessoController } from "../../modules/usuario/useCases/deleteNivelAcesso/DeleteNivelAcessoController";
import { CreateNivelAcessoController } from "../../modules/usuario/useCases/createNivelAcesso/CreateNivelAcessoController";

const nivelAcessoRoutes = Router();

const createNivelAcessoController = new CreateNivelAcessoController();
const findNivelAcessoByIdController = new FindNivelAcessoByIdController();
const listNivelAcessoController = new ListNivelAcessoController();
const updateNivelAcessoController = new UpdateNivelAcessoController();
const deleteNivelAcessoController = new DeleteNivelAcessoController();

nivelAcessoRoutes.post("/", createNivelAcessoController.handle);

nivelAcessoRoutes.get("/", listNivelAcessoController.handle);

nivelAcessoRoutes.get("/:id", findNivelAcessoByIdController.handle);

nivelAcessoRoutes.put("/:id", updateNivelAcessoController.handle);

nivelAcessoRoutes.delete("/:id", deleteNivelAcessoController.handle);

export { nivelAcessoRoutes };