import { Request, Response } from "express";
import { container } from "tsyringe";
import { FindStatusClienteByIdUseCase } from "./FindStatusClienteByIdUseCase";

class FindStatusClienteByIdController {

    async handle(request: Request, response: Response): Promise<Response> {

        const idStatus = Number(request.params.id);

        const findStatusClienteByIdUseCase = container.resolve(FindStatusClienteByIdUseCase);

        try {
            const statusClienteFound = await findStatusClienteByIdUseCase.execute(idStatus);
            return response.status(200).json(statusClienteFound);
        } catch (error) {
            return response.status(400).json(error);
        }
    }
}

export { FindStatusClienteByIdController };