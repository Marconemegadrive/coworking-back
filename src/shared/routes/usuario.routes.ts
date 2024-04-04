import { Router } from "express";
import { CreateUsuarioController } from "../../modules/usuario/useCases/createUsuario/CreateUsuarioController";
import { ListUsuariosController } from "../../modules/usuario/useCases/listUsuarios/ListUsuariosController";
import { FindUsuarioByIdController } from "../../modules/usuario/useCases/findUsuarioById/FindUsuarioByIdController";
import { FindUsuarioByLoginController } from "../../modules/usuario/useCases/findUsuarioByLogin/FindUsuarioByLoginController";
import { UpdateUsuarioByIdController } from "../../modules/usuario/useCases/updateUsuarioById/UpdateUsuarioByIdController";
import { UpdateUsuarioByLoginController } from "../../modules/usuario/useCases/updateUsuarioByLogin/UpdateUsuarioByLoginController";
import { DeleteUsuarioController } from "../../modules/usuario/useCases/deleteUsuario/DeletarUsuarioController";
import { CreateUsuarioNivelController } from "../../modules/usuario/useCases/createUsuarioNivelAcesso.ts/CreateUsuarioNivelController";
import { AutenticacaoUsuarioController } from "../../modules/usuario/useCases/autenticacaoUsuario/AutenticacaoUsuarioController";


const usuarioRoutes = Router();

const createUsuarioController = new CreateUsuarioController();
const findUsuarioByIdController = new FindUsuarioByIdController();
const findUsuarioByLoginController = new FindUsuarioByLoginController();
const listUsuariosController = new ListUsuariosController();
const updateUsuarioByIdController = new UpdateUsuarioByIdController();
const updateUsuarioByLoginController = new UpdateUsuarioByLoginController();
const deleteUsuarioController = new DeleteUsuarioController();

const createUsuarioNivelController = new CreateUsuarioNivelController()
const autenticacaoUsuarioController = new AutenticacaoUsuarioController();

usuarioRoutes.post("/autenticacao", autenticacaoUsuarioController.handle);

usuarioRoutes.post("/", createUsuarioController.handle);

usuarioRoutes.post("/cadastro", createUsuarioNivelController.handle);

usuarioRoutes.get("/", listUsuariosController.handle);

usuarioRoutes.get("/:id", findUsuarioByIdController.handle);

usuarioRoutes.get("/login/:login", findUsuarioByLoginController.handle);

usuarioRoutes.put("/:id", updateUsuarioByIdController.handle);

usuarioRoutes.put("/login/:login", updateUsuarioByLoginController.handle);

usuarioRoutes.delete("/:id", deleteUsuarioController.handle);

export { usuarioRoutes };