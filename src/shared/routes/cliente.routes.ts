import { Router } from "express";
import { CreateClienteController } from "../../modules/cliente/useCases/createCliente/CreateClienteController";
import { ListClientesController } from "../../modules/cliente/useCases/listClientes/ListClientesController";
import { FindClienteByIdController } from "../../modules/cliente/useCases/findClienteById/FindClienteByIdController";
import { UpdateClienteController } from "../../modules/cliente/useCases/updateCliente/UpdateClienteController";
import { DeleteClienteController } from "../../modules/cliente/useCases/deleteCliente/DeleteClienteController";


const clienteRoutes = Router();

const createClienteController = new CreateClienteController();
const listClientesController = new ListClientesController();
const findClienteByIdController = new FindClienteByIdController();
const updateClienteController = new UpdateClienteController();
const deleteClienteController = new DeleteClienteController();

clienteRoutes.post("/", createClienteController.handle);
clienteRoutes.get("/", listClientesController.handle);
clienteRoutes.get("/:id", findClienteByIdController.handle);
clienteRoutes.put("/:id", updateClienteController.handle);
clienteRoutes.delete("/:id", deleteClienteController.handle);

export { clienteRoutes };