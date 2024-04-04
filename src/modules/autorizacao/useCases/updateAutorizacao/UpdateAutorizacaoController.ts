import { UpdateAutorizacaoUseCase } from "./UpdateAutorizacaoUseCase";
import { Request, Response } from "express";
import { container } from "tsyringe";


class UpdateAutorizacaoController {

    async handle(request: Request, response: Response): Promise<Response>{

        const idAutorizacao = Number(request.params.idAutorizacao);
        const { obs, funcionario_cpf, tipoAutorizacao_idtipoAutorizacao} = request.body;

        const updatedAutorizacao = container.resolve(UpdateAutorizacaoUseCase);
        
        try{
            const autorizacaoUpdated = await updatedAutorizacao.execute(idAutorizacao,
                obs, funcionario_cpf, tipoAutorizacao_idtipoAutorizacao);
            
            return response.status(200).json(autorizacaoUpdated);
        } catch (error) {
            return response.status(400).json(error);
        }
    }
}
export { UpdateAutorizacaoController };