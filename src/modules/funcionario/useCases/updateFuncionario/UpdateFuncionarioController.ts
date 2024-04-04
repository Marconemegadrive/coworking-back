import { Request, Response } from "express";
import { container } from "tsyringe";
import { UpdateFuncionarioUseCase } from "./UpdateFuncionarioUseCase";

class UpdateFuncionarioController {

    async handle(request: Request, response: Response): Promise<Response> {
        const emailFuncionario = request.params.email;
        const { telefones } = request.body;

        const updateFuncionarioUseCase = container.resolve(UpdateFuncionarioUseCase);

        try {
            const funcionarioUpdated = await updateFuncionarioUseCase.execute(emailFuncionario, telefones);
            return response.status(200).json(funcionarioUpdated);
        } catch (error) {
            return response.status(400).json(error);
        }
    }
}

export { UpdateFuncionarioController };
