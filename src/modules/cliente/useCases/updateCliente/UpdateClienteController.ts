import { Request, Response } from "express";
import { container } from "tsyringe";
import { UpdateClienteUseCase } from "./UpdateClienteUseCase";

class UpdateClienteController {

    async handle(request: Request, response: Response): Promise<Response> {

        const idCliente = Number(request.params.id);
        const { contrato } = request.body;

        const updateClienteUseCase = container.resolve(UpdateClienteUseCase);

        try {
            const clienteUpdated = await updateClienteUseCase.execute(idCliente, contrato);

            return response.status(200).json(clienteUpdated);
        } catch (error) {
            return response.status(400).json(error);
        }
    }
}

export { UpdateClienteController };