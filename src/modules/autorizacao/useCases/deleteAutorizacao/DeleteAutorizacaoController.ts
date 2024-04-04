import { container } from "tsyringe";
import { DeleteAutorizacaoUseCase } from "./deleteAutorizacaoUseCase";
import { Request, Response } from "express";

class DeleteAutorizacaoController {

    async handle(request: Request, response: Response): Promise<Response> {

        const idAutorizacao = Number(request.params.idAutorizacao);

        const deleteAutorizacaoUseCase = container.resolve(DeleteAutorizacaoUseCase);

        try {
            const autorizacaoDeleted= await deleteAutorizacaoUseCase.execute(idAutorizacao);

            return response.status(200).json(autorizacaoDeleted);
            
        } catch (error) {
            return response.status(500).json(error);
        }
    }
}
export { DeleteAutorizacaoController };