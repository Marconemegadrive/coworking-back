import { Request, Response } from "express";
import { container } from "tsyringe";
import { CreateTelefoneUseCase } from "./CreateTelefoneUseCase";

class CreateTelefoneController {

    async handle(request: Request, response: Response): Promise<Response> {

        const { telefone, Cliente_idCliente, Funcionario_cpf1 } = request.body;

        const createTelefoneUseCase = container.resolve(CreateTelefoneUseCase);

        try {
            const telefoneCreated = await createTelefoneUseCase.execute({
                telefone, 
                Cliente_idCliente, 
                Funcionario_cpf1
            });

            return response.status(201).json(telefoneCreated);
        } catch (error) {
            return response.status(400).json(error);
        }
    }
}

export { CreateTelefoneController };