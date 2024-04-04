import { container } from "tsyringe";
import { CreateAutorizacaoUseCase } from "./CreateAutorizacaoUseCases";
import { Request, Response } from "express";

class CreateAutorizacaoController {

    async handle ( request: Request, response: Response): Promise<Response> {

        const {obs, funcionario_cpf, tipoAutorizacao_idtipoAutorizacao} = request.body;

        const createAutorizacaoUseCase = container.resolve(CreateAutorizacaoUseCase);
        
        try{
            const autorizacaoCreated = await createAutorizacaoUseCase.execute({
                obs, 
                funcionario_cpf, 
                tipoAutorizacao_idtipoAutorizacao

            });

            return response.status(200).json(autorizacaoCreated);
        }catch (error) {
            return response.status(400).json(error);
        }
    }
}