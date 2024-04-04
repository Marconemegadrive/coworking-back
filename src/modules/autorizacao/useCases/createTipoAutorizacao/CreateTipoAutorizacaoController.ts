import { Request, Response } from "express";
import { container } from "tsyringe";
import { CreateTipoAutorizacaoUseCase } from "./CreateTipoAutorizacaoUseCase";

class CreateTipoAutorizacaoController {

    async handle(request: Request, response: Response): Promise<Response> {
        
        const { idTipoAutorizacao, tipoAutorizacao} = request.body;

        const createTipoAutorizacaoUseCase = container.resolve(CreateTipoAutorizacaoUseCase);

        try {

            const tipo_Autorizacao = await createTipoAutorizacaoUseCase.execute({
                idTipoAutorizacao,
                tipoAutorizacao
            });

            return response.status(201).json(tipo_Autorizacao);
        } catch (error) {
            return response.status(400).json(error);
        }
    }

}


export { CreateTipoAutorizacaoController};