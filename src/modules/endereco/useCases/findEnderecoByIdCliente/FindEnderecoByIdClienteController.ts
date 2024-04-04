import { Request, Response } from "express";
import { container } from "tsyringe";
import { FindEnderecoByIdClienteUseCase } from "./FindEnderecoByIdClienteUseCase";

class FindEnderecoByIdClienteController {

    async handle(request: Request, response: Response): Promise<Response> {

        const idCliente = Number(request.params.idCliente);

        const findEnderecoByIdClienteUseCase = container.resolve(FindEnderecoByIdClienteUseCase);

        try {
            const enderecoFound = await findEnderecoByIdClienteUseCase.execute(idCliente);

            return response.status(200).json(enderecoFound);
        } catch (error) {
            return response.status(400).json(error);
        }
    }
}

export { FindEnderecoByIdClienteController };