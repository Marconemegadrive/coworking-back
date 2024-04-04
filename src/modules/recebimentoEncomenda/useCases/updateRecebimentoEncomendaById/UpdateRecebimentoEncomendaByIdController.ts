import { Request, Response } from "express";
import { container } from "tsyringe";
import { UpdateRecebimentoEncomendaByIdUseCase } from "./UpdateRecebimentoEncomendaByIdUseCase";

class UpdateRecebimentoEncomendaByIdController {

    async handle(request: Request, response: Response): Promise<Response> {

        const idRecebimentoEncomenda = Number(request.params.id);
        const { obsRecEncomenda, idEncomenda} = request.body;

        const updateRecebimentoEncomendaUseCase = container.resolve(UpdateRecebimentoEncomendaByIdUseCase);
        const recebimentoEncomendaUpdated = await updateRecebimentoEncomendaUseCase.execute(idRecebimentoEncomenda, {
            obsRecEncomenda,
            idEncomenda 
                    });
        return response.status(200).json(recebimentoEncomendaUpdated);
    }
}



export { UpdateRecebimentoEncomendaByIdController };
