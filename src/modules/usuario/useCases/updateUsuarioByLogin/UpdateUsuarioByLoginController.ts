import { Request, Response } from "express";
import { container } from "tsyringe";
import { UpdateUsuarioByLoginUseCase } from "./UpdateUsuarioByLoginUseCase";

class UpdateUsuarioByLoginController {

    async handle(request: Request, response: Response): Promise<Response> {

        const loginUsuario = request.params.login;
        const { senha, tipoUsuario, acessoAdm, idNivelAcesso } = request.body;

        const updateUsuarioByLoginUseCase = container.resolve(UpdateUsuarioByLoginUseCase);
        const usuarioUpdated = await updateUsuarioByLoginUseCase.execute(loginUsuario, {
            senha, 
            tipoUsuario, 
            acessoAdm, 
            nivelAcesso_IdAcesso: idNivelAcesso
        });
        return response.status(200).json(usuarioUpdated);
    }
}

export { UpdateUsuarioByLoginController }