import { Request, Response } from "express";
import { container } from "tsyringe";
import { CreateClienteUseCase } from "./CreateClienteUseCase";

class CreateClienteController {

    async handle(request: Request, response: Response): Promise<Response> {

        const { contrato, StatusCliente_idStatusCliente } = request.body;

        const createClienteUseCase = container.resolve(CreateClienteUseCase);

        try {
            const clienteCreated = await createClienteUseCase.execute({
                contrato,
                StatusCliente_idStatusCliente
            });

            return response.status(201).json(clienteCreated);
        } catch (error) {
            return response.status(400).json(error);
        }
    }
}

export { CreateClienteController };