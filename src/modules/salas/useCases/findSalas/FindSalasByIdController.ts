import { Request, Response } from "express";
import { FindSalasByIdUseCase } from "./FindSalasByIdUseCase";
import { container } from "tsyringe";

class FindSalasByIdController {

    async handle(request: Request, response: Response): Promise<Response> {

        const idSala = Number(request.params.idSala);

        const findSalasByIdUseCase = container.resolve(FindSalasByIdUseCase);

        try {
            const salaFound = await findSalasByIdUseCase.execute(idSala)

            return response.status(201).json(salaFound);
        }catch (error) {
            return response.status(400).json(error);
        }
    }
}

export { FindSalasByIdController };