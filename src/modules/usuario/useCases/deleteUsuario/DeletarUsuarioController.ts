import { Request, Response } from "express";
import { container } from "tsyringe";
import { DeleteUsuarioUseCase } from "./DeleteUsuarioUseCase";

class DeleteUsuarioController {
    async handle(request: Request, response: Response): Promise<Response> {

        const idUsuario = Number(request.params.id);

        const deleteUsuarioUseCase = container.resolve(DeleteUsuarioUseCase);
        const usuarioDeleted = await deleteUsuarioUseCase.execute(idUsuario);

        return response.status(200).json(usuarioDeleted);
    }
}

export { DeleteUsuarioController };