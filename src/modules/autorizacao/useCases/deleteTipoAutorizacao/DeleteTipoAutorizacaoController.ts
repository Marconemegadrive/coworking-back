import { Request, Response } from "express";
import { container } from "tsyringe";
import { DeleteTipoAutorizacaoUseCase } from "./DeleteTipoAutorizacaoUseCase";



class DeleteTipoAutorizacaoController {

    async handle(request: Request, response: Response ): Promise<Response> {

        const idTipoAutorizacao = Number(request.params.idTipoAutorizacao);

        const deleteTipoAutorizacaoUseCase = container.resolve(DeleteTipoAutorizacaoUseCase);

        try {
            const tipoAutorizacaoDeleted = await deleteTipoAutorizacaoUseCase.execute(idTipoAutorizacao);

            return response.status(200).json(tipoAutorizacaoDeleted);
        } catch (error) {
            return response.status(400).json(error);
        }
    }
}

export { DeleteTipoAutorizacaoController};