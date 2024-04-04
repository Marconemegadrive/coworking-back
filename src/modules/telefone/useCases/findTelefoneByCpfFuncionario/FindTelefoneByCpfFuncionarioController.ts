import { Request, Response } from "express";
import { container } from "tsyringe";
import { FindTelefoneByCpfFuncionarioUseCase } from "./FindTelefoneByCpfFuncionarioUseCase";

class FindTelefoneByCpfFuncionarioController {

    async handle(request: Request, response: Response): Promise<Response> {

        const cpfFuncionario = request.params.cpfFuncionario;

        const findTelefoneByCpfFuncionarioUseCase = container.resolve(FindTelefoneByCpfFuncionarioUseCase);

        try {
            const telefoneFound = await findTelefoneByCpfFuncionarioUseCase.execute(cpfFuncionario);

            return response.status(200).json(telefoneFound);
        } catch (error) {
            return response.status(400).json(error);
        }
    }
}

export { FindTelefoneByCpfFuncionarioController }