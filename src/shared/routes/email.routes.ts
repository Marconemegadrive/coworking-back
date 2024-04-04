import { Router } from "express";
import { CreateEmailController } from "../../modules/email/useCases/createEmail/CreateEmailController";
import { ListEmailsController } from "../../modules/email/useCases/listEmails/ListEmailsController";
import { FindEmailByIdClienteController } from "../../modules/email/useCases/findEmailByIdCliente/FindEmailByIdClienteController";
import { FindEmailByCpfFuncionarioController } from "../../modules/email/useCases/findEmailByCpfFuncionario/FindEmailByCpfFuncionarioController";
import { UpdateEmailController } from "../../modules/email/useCases/updateEmail/UpdateEmailController";
import { DeleteEmailController } from "../../modules/email/useCases/deleteEmail/DeleteEmailController";

const emailRoutes = Router();

const createEmailController = new CreateEmailController()
const lisEmailsController = new ListEmailsController();
const findEmailByIdClienteController = new FindEmailByIdClienteController();
const findEmailByCpfFuncionarioController = new FindEmailByCpfFuncionarioController();
const updateEmailController = new UpdateEmailController();
const deleteEmailController = new DeleteEmailController();

emailRoutes.post("/", createEmailController.handle);
emailRoutes.get("/", lisEmailsController.handle);
emailRoutes.get("/cliente/:id", findEmailByIdClienteController.handle);
emailRoutes.get("/funcionario/:cpf", findEmailByCpfFuncionarioController.handle);
emailRoutes.put("/:id", updateEmailController.handle);
emailRoutes.delete("/:id", deleteEmailController.handle);

export { emailRoutes };