import { Request, Response } from "express";
import { container } from "tsyringe";
import { CreateClientePjUseCase } from "./CreateClientePjUseCase";

class CreateClientePjController {

    async handle(request: Request, response: Response): Promise<Response> {

        const { cnpj, razaoSocial, nomeFantasia, dataFundacao, Cliente_idCliente } = request.body;

        const createClientePjUseCase = container.resolve(CreateClientePjUseCase);

        try {
            const clienteCreated = await createClientePjUseCase.execute({
                cnpj, 
                razaoSocial, 
                nomeFantasia, 
                dataFundacao, 
                Cliente_idCliente,
            });

            return response.status(201).json(clienteCreated);
        } catch (error) {
            return response.status(400).json(error);
        }
    }
}

export { CreateClientePjController };