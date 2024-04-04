import { Request, Response } from "express";
import { container } from "tsyringe";
import { UpdateNivelAcessoUseCase } from "./UpdateNivelAcessoUseCase";

class UpdateNivelAcessoController {

    async handle(request: Request, response: Response): Promise<Response> {

        const idAcesso = Number(request.params.id);
        const { nome, nivel } = request.body;

        const updateNivelAcessoUseCase = container.resolve(UpdateNivelAcessoUseCase);

        try {
            const nivelAcessoUpdated = await updateNivelAcessoUseCase.execute(idAcesso, {
                nome,
                nivel,
            });
    
            return response.status(200).json(nivelAcessoUpdated);
        } catch (error) {
            return response.status(400).json(error);
        }
    }
}

export { UpdateNivelAcessoController };