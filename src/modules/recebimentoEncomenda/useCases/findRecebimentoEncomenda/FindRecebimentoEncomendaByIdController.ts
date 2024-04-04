import { Request, Response } from "express";
import { container } from "tsyringe";
import { FindRecebimentoEncomendaByIdUseCase } from "./FindRecebimentoEncomendaByIdUseCase";


class FindRecebimentoEncomendaByIdController {

    async handle(request: Request, response: Response): Promise<Response> {

        const idRecebimentoEncomenda = Number(request.params.id);

        const findRecebimentoEncomendaByIdUseCase = container.resolve(FindRecebimentoEncomendaByIdUseCase);

        const recebimentoEncomenda = await findRecebimentoEncomendaByIdUseCase.execute(idRecebimentoEncomenda);

        return response.status(200).json(recebimentoEncomenda);
    }
}

export { FindRecebimentoEncomendaByIdController };
