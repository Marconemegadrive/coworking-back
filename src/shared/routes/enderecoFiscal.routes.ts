import { Router } from "express";
import { CreateEnderecoFiscalController } from "../../modules/enderecoFiscal/useCases/createEnderecoFiscal/CreateEnderecoFiscalController";
import { ListEnderecosFiscaisController } from "../../modules/enderecoFiscal/useCases/listEnderecoFiscal/ListEnderecosFiscaisController";
import { FindEnderecoFiscalByIdController } from "../../modules/enderecoFiscal/useCases/findEnderecoFiscalById/FindEnderecoFiscalByIdController";
import { UpdateEnderecoFiscalByIdController } from "../../modules/enderecoFiscal/useCases/updateEnderecoFiscalById/UpdateEnderecoFiscalByIdController";
import { DeleteEnderecoFiscalController } from "../../modules/enderecoFiscal/useCases/deleteEnderecoFiscal/DeleteEnderecoFiscalController";

export const enderecoFiscalRoutes = Router();

const createEnderecoFiscalController = new CreateEnderecoFiscalController();
const listEnderecosFiscaisController = new ListEnderecosFiscaisController();
const findEnderecoFiscalByIdController = new FindEnderecoFiscalByIdController();
const updateEnderecoFiscalController = new UpdateEnderecoFiscalByIdController();
const deleteEnderecoFiscalController = new DeleteEnderecoFiscalController();

enderecoFiscalRoutes.post("/", createEnderecoFiscalController.handle);
enderecoFiscalRoutes.get("/", listEnderecosFiscaisController.handle);
enderecoFiscalRoutes.get("/:id", findEnderecoFiscalByIdController.handle);
enderecoFiscalRoutes.put("/:id", updateEnderecoFiscalController.handle);
enderecoFiscalRoutes.delete("/:id", deleteEnderecoFiscalController.handle);

