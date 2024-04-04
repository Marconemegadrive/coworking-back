import { Request, Response } from "express";
import { container } from "tsyringe";
import { CreateEnderecoUseCase } from "./CreateEnderecoUseCase";

class CreateEnderecoController {

    async handle(request: Request, response: Response): Promise<Response> {

        const { uf, cep, cidade, bairro, complemento, numero, rua, obs, cliente_idCliente } = request.body;

        const createEnderecoUseCase = container.resolve(CreateEnderecoUseCase);

        try {
            const enderecoCreated = await createEnderecoUseCase.execute({
                uf, 
                cep, 
                cidade, 
                bairro, 
                complemento, 
                numero, 
                rua, 
                obs, 
                cliente_idCliente
            });

            return response.status(201).json(enderecoCreated);
        } catch (error) {
            return response.status(400).json(error);
        }
    }
}

export { CreateEnderecoController };