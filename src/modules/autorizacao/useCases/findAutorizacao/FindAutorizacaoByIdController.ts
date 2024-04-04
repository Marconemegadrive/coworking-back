import { container } from "tsyringe";
import { FindAutorizacaoByIdUseCase } from "./FindAutorizacaoByIdUseCase";
import { Request, Response } from "express";

class FindAutorizacaoByIdController {

    async handle(request: Request, response: Response): Promise<Response> {

        const idAutorizacao = Number(request.params.idAutorizacao);

        const findAutorizacaoByIdUseCase = container.resolve(FindAutorizacaoByIdUseCase);

        try {
            const autorizacaoFound = await findAutorizacaoByIdUseCase.execute(idAutorizacao)

            return response.status(200).json(autorizacaoFound);
        } catch (error) {
            return response.status(500).json(error);
        }
    }
}
export { FindAutorizacaoByIdController };