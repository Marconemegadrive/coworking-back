import { Request, Response } from "express";
import { container } from "tsyringe";
import { FindEmailByCpfFuncionarioUseCase } from "./FindEmailByCpfFuncionarioUseCase";

class FindEmailByCpfFuncionarioController {

    async handle(request: Request, response: Response): Promise<Response> {

        const cpfFuncionario = request.params.cpf;

        const findEmailByCpfFuncionarioUseCase = container.resolve(FindEmailByCpfFuncionarioUseCase);

        try {
            const emailFound = await findEmailByCpfFuncionarioUseCase.execute(cpfFuncionario);
            return response.status(200).json(emailFound);
        } catch (error) {
            return response.status(400).json(error);
        }
    }
}

export { FindEmailByCpfFuncionarioController };