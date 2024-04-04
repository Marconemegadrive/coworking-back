import { Request, Response } from "express";
import { container } from "tsyringe";
import { UpdateRepresentanteByNomeUseCase } from "./UpdateRepresentanteByNomeUseCase";

class UpdateRepresentanteByNomeController {

    async handle(request: Request, response: Response): Promise<Response> {

        const idAcesso = Number(request.params.id);
        const { senha, tipoUsuario, acessoAdm, idNivelAcesso } = request.body;

        const updateUsuarioUseCase = container.resolve(UpdateRepresentanteByNomeUseCase);
        const usuarioUpdated = await updateUsuarioUseCase.execute(idAcesso, {
            senha, 
            tipoUsuario, 
            acessoAdm, 
            idNivelAcesso
        });
        return response.status(200).json(usuarioUpdated);
    }
}

export { UpdateRepresentanteByNomeController };