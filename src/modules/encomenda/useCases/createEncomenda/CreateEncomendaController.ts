import { Request, Response } from "express";
import { container } from "tsyringe";
import { CreateEncomendaUseCase } from "./CreateEncomendaUseCase";

export class CreateEncomendaController {
    
    async handle(request: Request, response: Response): Promise<Response> {
        
        const { obsEncomenda, idEndFiscal, idCliente } = request.body;

        const createEncomendaUseCase = container.resolve(CreateEncomendaUseCase);
        
        const encomenda = await createEncomendaUseCase.execute({
            obsEncomenda, 
            idEndFiscal, 
            idCliente
        });

        return response.status(201).json(encomenda);
    }
}

