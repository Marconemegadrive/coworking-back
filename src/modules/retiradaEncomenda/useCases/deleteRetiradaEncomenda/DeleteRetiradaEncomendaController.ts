import { Request, Response } from "express";
import { container } from "tsyringe";
import { DeleteRetiradaEncomendaUseCase } from "./DeleteRetiradaEncomendaUseCase";

export class DeleteRetiradaEncomendaController {
    async handle(request: Request, response: Response): Promise<Response> {

        const idRetiradaEncomenda = Number(request.params.id);

        const deleteRetiradaEncomendaUseCase = container.resolve(DeleteRetiradaEncomendaUseCase);
        const retiradaEncomendaDeleted = await deleteRetiradaEncomendaUseCase.execute(idRetiradaEncomenda);

        return response.status(200).json(retiradaEncomendaDeleted);
    }
}

