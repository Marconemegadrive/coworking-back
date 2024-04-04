import { Request, Response } from "express";
import { container } from "tsyringe";
import { FindEmailByIdClienteUseCase } from "./FindEmailByIdClienteUseCase";

class FindEmailByIdClienteController {

    async handle(request: Request, response: Response): Promise<Response> {

        const idCliente = Number(request.params.id);

        const findEmailByIdClienteUseCase = container.resolve(FindEmailByIdClienteUseCase);

        try {
            const emailFound = await findEmailByIdClienteUseCase.execute(idCliente);
            return response.status(200).json(emailFound);
        } catch (error) {
            return response.status(400).json(error);
        }
    }
}

export { FindEmailByIdClienteController };