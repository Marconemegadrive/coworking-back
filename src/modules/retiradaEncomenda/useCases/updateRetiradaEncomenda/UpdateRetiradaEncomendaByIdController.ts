import { Request, Response } from "express";
import { container } from "tsyringe";
import { UpdateRetiradaEncomendaByIdUseCase } from "./UpdateRetiradaEncomendaByIdUseCase";

export class UpdateRetiradaEncomendaByIdController {

    async handle(request: Request, response: Response): Promise<Response> {

        const idRetiradaEncomenda = Number(request.params.id);
        const { obsRetEncomenda, idEncomenda} = request.body;

        const updateRetiradaEncomendaUseCase = container.resolve(UpdateRetiradaEncomendaByIdUseCase);
        const retiradaEncomendaUpdated = await updateRetiradaEncomendaUseCase.execute(idRetiradaEncomenda, {
            obsRetEncomenda,
            idEncomenda 
                    });
        return response.status(200).json(retiradaEncomendaUpdated);
    }
}

