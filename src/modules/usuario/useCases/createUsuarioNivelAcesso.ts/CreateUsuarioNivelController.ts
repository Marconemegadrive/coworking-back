import { Request, Response } from "express";
import { container } from "tsyringe";
import { CreateUsuarioNivelAcessoUseCase } from "./CreateUsuarioNivelAcessoUseCase";

class CreateUsuarioNivelController {

    async handle(request: Request, response: Response): Promise<Response> {

        const { nivelAcesso, nomeNivel, login, senha, tipoUsuario, acessoAdm } = request.body;

        const createUsuarioNivelAcessoUseCase = container.resolve(CreateUsuarioNivelAcessoUseCase);

        try {
            const usuarioNivelAcessoCreated = await createUsuarioNivelAcessoUseCase.execute(nivelAcesso, nomeNivel, login, senha, tipoUsuario, acessoAdm);

            return response.status(201).json(usuarioNivelAcessoCreated);    
        } catch (error) {
            return response.status(400).json(error);    
        }
    }
}

export { CreateUsuarioNivelController };