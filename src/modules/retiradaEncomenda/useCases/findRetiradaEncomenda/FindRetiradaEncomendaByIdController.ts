import { Request, Response } from "express";
import { container } from "tsyringe";
import { FindRetiradaEncomendaByIdUseCase } from "./FindRetiradaEncomendaByIdUseCase";

export class FindRetiradaEncomendaByIdController {

    async handle(request: Request, response: Response): Promise<Response> {

        const idRetiradaEncomenda = Number(request.params.id);

        const findRetiradaEncomendaByIdUseCase = container.resolve(FindRetiradaEncomendaByIdUseCase);

        const retiradaEncomenda = await findRetiradaEncomendaByIdUseCase.execute(idRetiradaEncomenda);

        return response.status(200).json(retiradaEncomenda);
    }
}
