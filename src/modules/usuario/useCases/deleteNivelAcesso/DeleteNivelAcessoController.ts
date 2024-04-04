import { Request, Response } from "express";
import { container } from "tsyringe";
import { DeleteNivelAcessoUseCase } from "./DeleteNivelAcessoUseCase";

class DeleteNivelAcessoController {

    async handle(request: Request, response: Response): Promise<Response> {

        const idAcesso = Number(request.params.id);

        const deleteNivelAcessoUseCase = container.resolve(DeleteNivelAcessoUseCase);

        try {
            const nivelAcessoDeleted = await deleteNivelAcessoUseCase.execute(idAcesso);
            
            return response.status(200).json(nivelAcessoDeleted);
        } catch (error) {
            return response.status(400).json(error);
        }
    }
}

export { DeleteNivelAcessoController };