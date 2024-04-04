import { Request, Response } from "express";
import { container } from "tsyringe";
import { CreateUsuarioUseCase } from "./CreateUsuarioUseCase";

class CreateUsuarioController {
    
    async handle(request: Request, response: Response): Promise<Response> {
        
        const { login, senha, tipoUsuario, acessoAdm, idNivelAcesso } = request.body;

        const createUsuarioUseCase = container.resolve(CreateUsuarioUseCase);
        
        const usuario = await createUsuarioUseCase.execute({
            login, 
            senha, 
            tipoUsuario, 
            acessoAdm, 
            nivelAcesso_IdAcesso: idNivelAcesso
        });

        return response.status(201).json(usuario);
    }
}

export { CreateUsuarioController };