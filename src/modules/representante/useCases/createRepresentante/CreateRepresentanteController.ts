import { Request, Response } from "express";
import { container } from "tsyringe";
import { CreateRepresentanteUseCase } from "./CreateRepresentanteUseCase";

class CreateRepresentanteController {
    
    async handle(request: Request, response: Response): Promise<Response> {
        
        const { nome, email, telefone, cnpj, idUsuario } = request.body;

        const createRepresentanteUseCase = container.resolve(CreateRepresentanteUseCase);
        
        const representante = await createRepresentanteUseCase.execute({
            nome, 
            email, 
            telefone, 
            cnpj, 
            idUsuario
        });

        return response.status(201).json(representante);
    }
}

export { CreateRepresentanteController };