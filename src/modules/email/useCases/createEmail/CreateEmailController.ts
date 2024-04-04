import { Request, Response } from "express";
import { container } from "tsyringe";
import { CreateEmailUseCase } from "./CreateEmailUseCase";

class CreateEmailController {

    async handle(request: Request, response: Response): Promise<Response> {

        const { email, Cliente_idCliente, Funcionario_cpf } = request.body;

        const createEmailUseCase = container.resolve(CreateEmailUseCase);

        try {
            const emailCreated = await createEmailUseCase.execute({
                email,
                Cliente_idCliente,
                Funcionario_cpf
            });

            return response.status(201).json(emailCreated);
        } catch (error) {
            return response.status(400).json(error);
        }
    }
}

export { CreateEmailController };