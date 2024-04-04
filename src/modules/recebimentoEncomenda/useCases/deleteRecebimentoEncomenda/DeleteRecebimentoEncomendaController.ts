import { Request, Response } from "express";
import { container } from "tsyringe";
import { DeleteRecebimentoEncomendaUseCase } from "./DeleteRecebimentoEncomendaUseCase";

class DeleteRecebimentoEncomendaController {
    async handle(request: Request, response: Response): Promise<Response> {

        const idEncomenda = Number(request.params.id);

        const deleteRecebimentoEncomendaUseCase = container.resolve(DeleteRecebimentoEncomendaUseCase);
        const recebimentoEncomendaDeleted = await deleteRecebimentoEncomendaUseCase.execute(idEncomenda);

        return response.status(200).json(recebimentoEncomendaDeleted);
    }
}

export { DeleteRecebimentoEncomendaController };
