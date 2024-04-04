import { container } from "tsyringe";
import { ListAutorizacaoUseCase } from "./ListAutorizacaoUseCase";
import { Request, Response } from "express";
import { FindAutorizacaoByIdUseCase } from "../findAutorizacao/FindAutorizacaoByIdUseCase";

class ListAutorizacaoController {

    async handle(request: Request, response: Response): Promise<Response> {

        const idAutorizacao = Number(request.params.idAutorizacao);

        const listAutorizacaoUseCase = container.resolve(ListAutorizacaoUseCase);

        try {
            const autorizacaoAll = await listAutorizacaoUseCase.execute(idAutorizacao)

            return response.status(200).json(autorizacaoAll);
        }catch (error) {
            return response.status(400).json(error);
        }
    }
}
export { ListAutorizacaoController };