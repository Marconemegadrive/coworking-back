import { Router } from "express";
import { CreateRepresentanteController } from "../../modules/representante/useCases/createRepresentante/CreateRepresentanteController";
import { ListRepresentantesController } from "../../modules/representante/useCases/listRepresentante/ListRepresentantesController";
import { FindRepresentanteByCpfController } from "../../modules/representante/useCases/findRepresentanteByCpf/FindRepresentanteByCpfController";
import { UpdateRepresentanteByCpfController } from "../../modules/representante/useCases/updateRepresentanteByCpf/UpdateRepresentanteByCpfController";
import { DeleteRepresentanteController } from "../../modules/representante/useCases/deleteRepresentante/DeleteRepresentanteController";


export const representanteRoutes = Router();

const createRepresentanteController = new CreateRepresentanteController();
const findRepresentanteByCpfController = new FindRepresentanteByCpfController();
const listRepresentantesController = new ListRepresentantesController();
const updateRepresentanteByCpfController = new UpdateRepresentanteByCpfController();
const deleteRepresentanteController = new DeleteRepresentanteController();

representanteRoutes.post("/", createRepresentanteController.handle);

representanteRoutes.get("/", listRepresentantesController.handle);

representanteRoutes.get("/:cpf", findRepresentanteByCpfController.handle);

representanteRoutes.put("/:cpf", updateRepresentanteByCpfController.handle);

representanteRoutes.delete("/:cpf", deleteRepresentanteController.handle);
