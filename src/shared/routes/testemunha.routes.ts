import { Router } from "express";
import { CreateTestemunhaController } from "../../modules/testemunha/useCases/createTestemunha/CreateTestemunhaController";
import { ListTestemunhasController } from "../../modules/testemunha/useCases/listTestemunhas/ListTestemunhasController";
import { DeleteTestemunhaController } from "../../modules/testemunha/useCases/deleteTestemunha/DeleteTestemunhaController";

const testemunhaRoutes = Router();

const createTestemunhaController = new CreateTestemunhaController();
const listTestemunhasController = new ListTestemunhasController();
const deleteTestemunhaController = new DeleteTestemunhaController();

testemunhaRoutes.post("/", createTestemunhaController.handle);
testemunhaRoutes.get("/", listTestemunhasController.handle);
testemunhaRoutes.get("/:id", )
testemunhaRoutes.delete("/:id", deleteTestemunhaController.handle);

export { testemunhaRoutes };
