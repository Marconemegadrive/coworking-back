import { Router } from "express";
import { CreateTelefoneController } from "../../modules/telefone/useCases/createTelefone/CreateTelefoneController";
import { ListTelefoneController } from "../../modules/telefone/useCases/listTelefones/ListTelefoneController";
import { FindTelefoneByIdClienteController } from "../../modules/telefone/useCases/findTelefoneByIdCliente/FindTelefoneByIdClienteController";
import { FindTelefoneByCpfFuncionarioController } from "../../modules/telefone/useCases/findTelefoneByCpfFuncionario/FindTelefoneByCpfFuncionarioController";
import { UpdateTelefoneController } from "../../modules/telefone/useCases/updateTelefone/UpdateTelefoneController";
import { DeleteTelefoneController } from "../../modules/telefone/useCases/deleteTelefone/DeleteTelefoneController";

const telefoneRoutes = Router();

const createTelefoneController = new CreateTelefoneController();
const listTelefoneController = new ListTelefoneController();
const findTelefoneByIdClienteController = new FindTelefoneByIdClienteController();
const findTelefoneByCpfFuncionarioController = new FindTelefoneByCpfFuncionarioController();
const updateTelefoneController = new UpdateTelefoneController();
const deleteTelefoneController = new DeleteTelefoneController();

telefoneRoutes.post("/", createTelefoneController.handle);
telefoneRoutes.get("/", listTelefoneController.handle);
telefoneRoutes.get("/telefoneCliente/:idCliente", findTelefoneByIdClienteController.handle);
telefoneRoutes.get("/telefoneFuncionario/:cpfFuncionario", findTelefoneByCpfFuncionarioController.handle);
telefoneRoutes.put("/:id", updateTelefoneController.handle);
telefoneRoutes.delete("/:id", deleteTelefoneController.handle);

export { telefoneRoutes };