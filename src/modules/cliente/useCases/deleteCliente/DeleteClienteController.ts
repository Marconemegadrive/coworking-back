import { Request, Response } from "express";
import { DeleteClienteUseCase } from "./DeleteClienteUseCase";
import { container } from "tsyringe";

class DeleteClienteController {

    async handle(request: Request, response: Response): Promise<Response> {

        const idCliente = Number(request.params.id);

        const deleteClienteUseCase = container.resolve(DeleteClienteUseCase);

        try {
            const clienteDeleted = await deleteClienteUseCase.execute(idCliente);

            return response.status(200).json(clienteDeleted);
        } catch (error) {
            return response.status(400).json(error);
        }
    }
}

export { DeleteClienteController };