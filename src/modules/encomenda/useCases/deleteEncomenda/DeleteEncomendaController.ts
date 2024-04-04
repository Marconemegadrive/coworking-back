import { Request, Response } from "express";
import { container } from "tsyringe";
import { DeleteEncomendaUseCase } from "./DeleteEncomendaUseCase";

export class DeleteEncomendaController {
    async handle(request: Request, response: Response): Promise<Response> {

        const idEncomenda = Number(request.params.id);

        const deleteEncomendaUseCase = container.resolve(DeleteEncomendaUseCase);
        const encomendaDeleted = await deleteEncomendaUseCase.execute(idEncomenda);

        return response.status(200).json(encomendaDeleted);
    }
}
