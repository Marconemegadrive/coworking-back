import { Request, Response } from "express";
import { container } from "tsyringe";
import { ListTestemunhasUseCase } from "./ListTestemunhasUseCase";

class ListTestemunhasController {
    
    async handle(request: Request, response: Response): Promise<Response> {

        const listTestemunhasUseCase = container.resolve(ListTestemunhasUseCase)

        try {
            const testemunhasAll = await listTestemunhasUseCase.execute();

            return response.status(200).json(testemunhasAll);
        } catch (error) {
            return response.status(400).json(error);
        }
    }
}

export { ListTestemunhasController };