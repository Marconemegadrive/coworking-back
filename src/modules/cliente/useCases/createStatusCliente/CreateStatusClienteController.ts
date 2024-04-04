import { Request, Response } from "express";
import { container } from "tsyringe";
import { CreateStatusClienteUseCase } from "./CreateStatusClienteUseCase";

class CreateStatusClienteController {

    async handle(request: Request, response: Response): Promise<Response> {

        const { tipo } = request.body;

        const createStatusClienteUseCase = container.resolve(CreateStatusClienteUseCase);

        try {
            const statusClienteCreated = await createStatusClienteUseCase.execute(tipo);
            return response.status(201).json(statusClienteCreated);
        } catch (error) {
            return response.status(400).json(error);
        }
    }
}

export { CreateStatusClienteController };