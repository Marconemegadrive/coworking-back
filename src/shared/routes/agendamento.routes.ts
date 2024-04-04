import { Router } from "express";
import { CreateAgendamentoController } from "../../modules/agendamento/useCases/createAgendamento/CreateAgendamentoController";
import { DeleteAgendamentoController } from "../../modules/agendamento/useCases/deleteAgendamento/DeleteAgendamentoController";
import { UpdateAgendamentoController } from "../../modules/agendamento/useCases/updateAgendamento/UpdateAgendamentoController";
import { FindAgendamentoByIdController } from "../../modules/agendamento/useCases/findAgendamento/FindAgendamentoByIdController";
import { ListAgendamentoController } from "../../modules/agendamento/useCases/listAgendamento/ListAgendamentoController";


const agendamentoRoutes = Router();

const createAgendamentoController = new CreateAgendamentoController();
const listAgendamentoController = new ListAgendamentoController();
const findAgendamentoController = new FindAgendamentoByIdController();
const updateAgendamentoController = new UpdateAgendamentoController();
const deleteAgendamentoController = new DeleteAgendamentoController();

agendamentoRoutes.post("/", createAgendamentoController.handle);
agendamentoRoutes.get("/", listAgendamentoController.handle);
agendamentoRoutes.get("/:id", findAgendamentoController.handle);
agendamentoRoutes.put("/:id", updateAgendamentoController.handle);
agendamentoRoutes.delete("/", deleteAgendamentoController.handle);

export { agendamentoRoutes };