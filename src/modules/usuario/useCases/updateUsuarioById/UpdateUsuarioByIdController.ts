import { Request, Response } from "express";
import { container } from "tsyringe";
import { UpdateUsuarioByIdUseCase } from "./UpdateUsuarioByIdUseCase";

class UpdateUsuarioByIdController {

    async handle(request: Request, response: Response): Promise<Response> {

        const idAcesso = Number(request.params.id);
        const { senha, tipoUsuario, acessoAdm, idNivelAcesso } = request.body;

        const updateUsuarioUseCase = container.resolve(UpdateUsuarioByIdUseCase);
        const usuarioUpdated = await updateUsuarioUseCase.execute(idAcesso, {
            senha, 
            tipoUsuario, 
            acessoAdm, 
            nivelAcesso_IdAcesso: idNivelAcesso
        });
        return response.status(200).json(usuarioUpdated);
    }
}

export { UpdateUsuarioByIdController };