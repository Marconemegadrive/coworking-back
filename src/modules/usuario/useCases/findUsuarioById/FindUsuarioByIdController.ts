import { Request, Response } from "express";
import { container } from "tsyringe";
import { FindUsuarioByIdUseCase } from "./FindUsuarioByIdUseCase";

class FindUsuarioByIdController {

    async handle(request: Request, response: Response): Promise<Response> {

        const idUsuario = Number(request.params.id);

        const findUsuarioByIdUseCase = container.resolve(FindUsuarioByIdUseCase);

        const usuario = await findUsuarioByIdUseCase.execute(idUsuario);

        return response.status(200).json(usuario);
    }
}

export { FindUsuarioByIdController };