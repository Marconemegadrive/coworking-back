import { Router } from "express";
import { CreateFuncionarioController } from "../../modules/funcionario/useCases/CreateFuncionario/CreateFuncionarioController";
import { ListFuncionariosController } from "../../modules/funcionario/useCases/ListFuncionario/ListFuncionariosController";
import { FindFuncionarioByCpfController } from "../../modules/funcionario/useCases/findFuncionarioByCpf/FindFuncionarioByCpfController";
import { FindFuncionarioByEmailController } from "../../modules/funcionario/useCases/FindFuncionarioByEmail/FindFuncionarioByEmailController";
import { UpdateFuncionarioController } from "../../modules/funcionario/useCases/updateFuncionario/UpdateFuncionarioController";
import { DeleteFuncionarioController } from "../../modules/funcionario/useCases/deleteFuncionario/DeleteFuncionarioController";

const funcionarioRoutes = Router();

const createFuncionarioController = new CreateFuncionarioController();
const listFuncionariosController = new ListFuncionariosController();
const findFuncionarioByCpfController = new FindFuncionarioByCpfController();
const findFuncionarioByEmailController = new FindFuncionarioByEmailController();
const updateFuncionarioController = new UpdateFuncionarioController();
const deleteFuncionarioController = new DeleteFuncionarioController();

funcionarioRoutes.post("/", createFuncionarioController.handle);
funcionarioRoutes.get("/", listFuncionariosController.handle);
funcionarioRoutes.get("/:cpf", findFuncionarioByCpfController.handle);
funcionarioRoutes.get("/email/:email", findFuncionarioByEmailController.handle);
funcionarioRoutes.put("/email/:email", updateFuncionarioController.handle);
funcionarioRoutes.delete("/email/:email", deleteFuncionarioController.handle);

export { funcionarioRoutes };