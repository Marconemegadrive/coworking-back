import { Request, Response } from "express";
import { container } from "tsyringe";
import { FindTipoAutorizacaoByIdUseCase } from "./FindTipoAutorizacaoByIdUseCase";

class FindTipoAutorizacaoByIdController {

    async handle(request: Request, response: Response): Promise<Response> {

        const idTipoAutorizacao = Number(request.params.idTipoAutorizacao);

        const findTipoAutorizacaoByIdUseCase = container.resolve(FindTipoAutorizacaoByIdUseCase);

        try {
            const idTipoAutorizacaoFound = await findTipoAutorizacaoByIdUseCase.execute(idTipoAutorizacao);

            return response.status(200).json(idTipoAutorizacaoFound);
            } catch (error) {
            return response.status(404).json({ error });
    }
}

}

export {FindTipoAutorizacaoByIdController};