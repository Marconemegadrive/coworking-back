import { Request, Response } from "express";
import { container } from "tsyringe";
import { FindFuncionarioByCpfUseCase } from "./FindFuncionarioByCpfUseCase";

class FindFuncionarioByCpfController {

    async handle(request: Request, response: Response): Promise<Response> {

        const cpfFuncionario = request.params.cpf;

        const findFuncionarioByCpfUseCase = container.resolve(FindFuncionarioByCpfUseCase);

        try {
            const funcionarioFound = await findFuncionarioByCpfUseCase.execute(cpfFuncionario);
            
            return response.status(200).json(funcionarioFound);
        } catch (error) {
            return response.status(400).json(error);
        }
    }
}

export { FindFuncionarioByCpfController };