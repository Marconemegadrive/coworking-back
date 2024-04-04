import { Request, Response } from "express";
import { container } from "tsyringe";
import { UpdateTipoAutorizacaoUseCase } from "./UpdateTipoAutorizacaoUseCase";


class UpdateTipoAutorizacaoController {

    async handle(request: Request, response: Response): Promise<Response> {


        const idTipoAutorizacao = Number(request.params.idTipoAutorizacao);
        const { tipoAutorizacao } = request.body;

        const updateTipoAutorizacaoUseCase = container.resolve(UpdateTipoAutorizacaoUseCase);

        try {
            const tipoAutorizacaoUpdated = updateTipoAutorizacaoUseCase.execute(idTipoAutorizacao, tipoAutorizacao);

            return response.status(200).json(tipoAutorizacaoUpdated);
        } catch (error){
            return response.status(400).json(error);
        }


    }
    
}
export {UpdateTipoAutorizacaoController};