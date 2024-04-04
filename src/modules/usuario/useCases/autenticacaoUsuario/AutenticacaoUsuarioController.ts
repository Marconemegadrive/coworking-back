import { Request, Response } from "express";
import { container } from "tsyringe";
import { AutenticacaoUsuarioUseCase } from "./AutenticacaoUsuarioUseCase";

class AutenticacaoUsuarioController {

    async handle(request: Request, response: Response): Promise<Response> {

        const { login, senha } = request.body;

        const autenticacaoUsuarioUseCase = container.resolve(AutenticacaoUsuarioUseCase);

        try {
            const usuario = await autenticacaoUsuarioUseCase.execute(login, senha);

            return response.status(200).json(usuario);
        } catch (error) {
            return response.status(400).json(error);
        }
    }
}

export { AutenticacaoUsuarioController };