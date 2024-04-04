import { Request, Response } from "express";
import { container } from "tsyringe";
import { FindUsuarioByLoginUseCase } from "./FindUsuarioByLoginUseCase";

class FindUsuarioByLoginController {

    async handle(request: Request, response: Response): Promise<Response> {

        const login = request.params.login;
        
        const findUsuarioByLoginUseCase = container.resolve(FindUsuarioByLoginUseCase) ;

        const usuario = await findUsuarioByLoginUseCase.execute(login);
        
        return response.status(200).json(usuario);
    }
}

export { FindUsuarioByLoginController };