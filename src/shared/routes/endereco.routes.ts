import { Router } from "express";
import { CreateEnderecoController } from "../../modules/endereco/useCases/createEndereco/CreateEnderecoController";
import { ListEnderecosController } from "../../modules/endereco/useCases/listEnderecos/ListEnderecosController";
import { FindEnderecoByIdClienteController } from "../../modules/endereco/useCases/findEnderecoByIdCliente/FindEnderecoByIdClienteController";
import { UpdateEnderecoController } from "../../modules/endereco/useCases/updateEndereco/UpdateEnderecoController";
import { DeleteEnderecoController } from "../../modules/endereco/useCases/deleteEndereco/DeleteEnderecoController";

const enderecoRoutes = Router();

const createEnderecoController = new CreateEnderecoController();
const listEnderecosController = new ListEnderecosController();
const findEnderecoByIdClienteController = new FindEnderecoByIdClienteController();
const updateEnderecoController = new UpdateEnderecoController();
const deleteEnderecoController = new DeleteEnderecoController();

enderecoRoutes.post("/", createEnderecoController.handle);
enderecoRoutes.get("/", listEnderecosController.handle);
enderecoRoutes.get("/:idCliente", findEnderecoByIdClienteController.handle);
enderecoRoutes.put("/:idCliente", updateEnderecoController.handle);
enderecoRoutes.delete("/:idCliente", deleteEnderecoController.handle);

export { enderecoRoutes };