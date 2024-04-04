import { Request, Response } from "express";
import { DeleteFuncionarioUseCase } from "./DeleteFuncionarioUseCase";
import { container } from "tsyringe";

class DeleteFuncionarioController {

    async handle(request: Request, response: Response): Promise<Response> {

        const email = request.params.email;

        const deleteFuncionarioUseCase = container.resolve(DeleteFuncionarioUseCase);

        try {
            const funcionarioDeleted = await deleteFuncionarioUseCase.execute(email);

            return response.status(200).json(funcionarioDeleted);
        } catch(error) {
            return response.status(400).json(error);
        }
    }
}

export { DeleteFuncionarioController };