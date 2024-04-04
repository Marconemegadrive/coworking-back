import { Request, Response } from "express";
import { container } from "tsyringe";
import { CreateRetiradaEncomendaUseCase } from "./CreateRetiradaEncomendaUseCase";

export class CreateRetiradaEncomendaController {
    
    async handle(request: Request, response: Response): Promise<Response> {
        
        const { obsRetEncomenda, idEncomenda } = request.body;

        const createRetiradaEncomendaUseCase = container.resolve(CreateRetiradaEncomendaUseCase);
        
        const retiradaEncomenda = await createRetiradaEncomendaUseCase.execute({
            obsRetEncomenda, 
            idEncomenda
                    });

        return response.status(201).json(retiradaEncomenda);
    }
}
