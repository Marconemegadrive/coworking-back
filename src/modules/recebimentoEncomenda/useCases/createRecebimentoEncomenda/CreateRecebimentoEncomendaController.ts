import { Request, Response } from "express";
import { container } from "tsyringe";
import { CreateRecebimentoEncomendaUseCase } from "./CreateRecebimentoEncomendaUseCase";

class CreateRecebimentoEncomendaController {
    
    async handle(request: Request, response: Response): Promise<Response> {
        
        const { obsRecEncomenda, idEncomenda } = request.body;

        const createRecebimentoEncomendaUseCase = container.resolve(CreateRecebimentoEncomendaUseCase);
        
        const recebimentoEncomenda = await createRecebimentoEncomendaUseCase.execute({
            obsRecEncomenda, 
            idEncomenda
                    });

        return response.status(201).json(recebimentoEncomenda);
    }
}

export { CreateRecebimentoEncomendaController };