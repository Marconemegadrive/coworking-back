import { Request, Response } from "express";
import { container } from "tsyringe";
import { FindEncomendaByIdUseCase } from "./FindEncomendaByIdUseCase";

export class FindEncomendaByIdController {

    async handle(request: Request, response: Response): Promise<Response> {

        const idEncomenda = Number(request.params.id);

        const findEncomendaByIdUseCase = container.resolve(FindEncomendaByIdUseCase);

        const encomenda = await findEncomendaByIdUseCase.execute(idEncomenda);

        return response.status(200).json(encomenda);
    }
}


