import { Request, Response } from "express";
import { container } from "tsyringe";
import { FindClienteCpfByCpfUseCase } from "./FindClienteCpfByCpfUseCase";

class FindClienteCpfByCpfController {

    async handle(request: Request, response: Response): Promise<Response> {

        const cpf = request.params.cpf;

        const findClienteCpfByCpfUseCase = container.resolve(FindClienteCpfByCpfUseCase);

        try {
            const clienteCpfFound = await findClienteCpfByCpfUseCase.execute(cpf);

            return response.status(200).json(clienteCpfFound);
        } catch (error) {
            return response.status(400).json(error);
        }
    }
}

export { FindClienteCpfByCpfController };