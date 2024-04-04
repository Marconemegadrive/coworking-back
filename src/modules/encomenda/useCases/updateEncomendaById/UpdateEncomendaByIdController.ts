import { Request, Response } from "express";
import { container } from "tsyringe";
import { UpdateEncomendaByIdUseCase } from "./UpdateEncomendaByIdUseCase";

export class UpdateEncomendaByIdController {

    async handle(request: Request, response: Response): Promise<Response> {

        const idEncomenda = Number(request.params.id);
        const { obsEncomenda, idEndFiscal, idCliente} = request.body;

        const updateEncomendaUseCase = container.resolve(UpdateEncomendaByIdUseCase);
        const encomendaUpdated = await updateEncomendaUseCase.execute(idEncomenda, {
            obsEncomenda,
            idEndFiscal, 
            idCliente
        });
        return response.status(200).json(encomendaUpdated);
    }
}


