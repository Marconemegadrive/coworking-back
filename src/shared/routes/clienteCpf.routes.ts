import { Router } from "express";
import { CreateClienteCpfController } from "../../modules/cliente/useCases/createClienteCpf/CreateClienteCpfController";
import { FindClienteCpfByCpfController } from "../../modules/cliente/useCases/findClienteCpfByCpf/FindClienteCpfByCpfController";
import { ListClientesCpfController } from "../../modules/cliente/useCases/listClientesCpf/ListClientesCpfController";
import { DeleteClienteCpfController } from "../../modules/cliente/useCases/deleteClienteCpf/DeleteClienteCpfController";

const clienteCpfRoutes = Router();

const createClienteCpfController = new CreateClienteCpfController();
const listClientesCpfController = new ListClientesCpfController();
const findClienteCpfByCpfController = new FindClienteCpfByCpfController();
const deleteClienteCpfController = new DeleteClienteCpfController();

clienteCpfRoutes.post("/", createClienteCpfController.handle);
clienteCpfRoutes.get("/", listClientesCpfController.handle);
clienteCpfRoutes.get("/:cpf", findClienteCpfByCpfController.handle);
clienteCpfRoutes.delete("/:cpf", deleteClienteCpfController.handle);

export { clienteCpfRoutes };