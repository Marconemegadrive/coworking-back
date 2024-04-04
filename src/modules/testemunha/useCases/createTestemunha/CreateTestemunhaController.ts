import { Request, Response } from "express";
import { container } from "tsyringe";
import { CreateTestemunhaUseCase } from "./CreateTestemunhaUseCase";

class CreateTestemunhaController {

    async handle(request: Request, response: Response): Promise<Response> {

        const { nome, cpf } = request.body;

        const createTestemunhaUseCase = container.resolve(CreateTestemunhaUseCase)

        try {
            const testemunhaCreated = await createTestemunhaUseCase.execute({
                nome,
                cpf
            });

            return response.status(201).json(testemunhaCreated);
        } catch(error) {
            return response.status(400).json(error);
        }
    }
}

export { CreateTestemunhaController };