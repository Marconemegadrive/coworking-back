import { Request, Response } from "express";
import { container } from "tsyringe";
import { FindClienteByIdUseCase } from "./FindClienteByIdUseCase";

class FindClienteByIdController {

    async handle(request: Request, response: Response): Promise<Response> {

        const idCliente = Number(request.params.id);

        const findClienteByIdUseCase = container.resolve(FindClienteByIdUseCase);

        try {
            const clienteFound = await findClienteByIdUseCase.execute(idCliente)

            return response.status(200).json(clienteFound);
        } catch (error) {
            return response.status(400).json(error);
        }
    }
}

export { FindClienteByIdController };