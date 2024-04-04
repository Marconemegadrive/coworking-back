import { Router } from "express";
import { CreateClientePjController } from "../../modules/cliente/useCases/createClientePj/CreateClientePjController";
import { FindClientePjByCnpjController } from "../../modules/cliente/useCases/findClientePjByCnpj/FindClientePjByCnpjController";
import { ListClientesPjController } from "../../modules/cliente/useCases/listClientesPj/ListClientesPjController";
import { DeleteClientePjController } from "../../modules/cliente/useCases/deleteClientePj/DeleteClientePjController";

const clientePjRoutes = Router();

const createClientePjController = new CreateClientePjController();
const findClientePjByCnpjController = new FindClientePjByCnpjController();
const listClientesPjUseCase = new ListClientesPjController();
const deleteClientePjController = new DeleteClientePjController();

clientePjRoutes.post("/", createClientePjController.handle);

clientePjRoutes.get("/", listClientesPjUseCase.handle);

clientePjRoutes.get("/:cnpj", findClientePjByCnpjController.handle);

clientePjRoutes.delete("/:cnpj", deleteClientePjController.handle);

export { clientePjRoutes };