import { Request, Response } from "express";
import { container } from "tsyringe";
import { FindNivelAcessoByIdUseCase } from "./FindNivelAcessoByIdUseCase";


class FindNivelAcessoByIdController {

    async handle(request: Request, response: Response): Promise<Response> {

        const idAcesso = Number(request.params.id);

        const findNivelAcessoUseCase = container.resolve(FindNivelAcessoByIdUseCase);
        
        try {
            const nivelAcesso = await findNivelAcessoUseCase.execute(idAcesso);

            return response.status(200).json(nivelAcesso);
        } catch (error) {
            return response.status(400).json(error);
        }
    }
}

export { FindNivelAcessoByIdController };