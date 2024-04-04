import { Request, Response } from "express";
import { container } from "tsyringe";
import { CreateEnderecoFiscalUseCase } from "./CreateEnderecoFiscalUseCase";

class CreateEnderecoFiscalController {
    
    async handle(request: Request, response: Response): Promise<Response> {
        
        const { statusEndFiscal, idCliente } = request.body;

        const createEnderecoFiscalUseCase = container.resolve(CreateEnderecoFiscalUseCase);
        
        const enderecoFiscal = await createEnderecoFiscalUseCase.execute({
            statusEndFiscal, 
            cliente_idCliente: idCliente
        });

        return response.status(201).json(enderecoFiscal);
    }
}

export { CreateEnderecoFiscalController };