import { Request, Response } from "express";
import { DeleteTestemunhaUseCase } from "./DeleteTestemunhaUseCase";
import { container } from "tsyringe";

class DeleteTestemunhaController {

    async handle(request: Request, response: Response): Promise<Response> {

        const idTestemunha = Number(request.params.id);

        const deleteTestemunhaUseCase = container.resolve(DeleteTestemunhaUseCase);

        try {
            const testemunhaDeleted = await deleteTestemunhaUseCase.execute(idTestemunha);

            return response.status(200).json(testemunhaDeleted);
        } catch (error) {
            return response.status(400).json(error);
        }
    }
}

export { DeleteTestemunhaController };