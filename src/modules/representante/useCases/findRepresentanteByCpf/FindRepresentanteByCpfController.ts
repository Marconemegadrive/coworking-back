import { Request, Response } from "express";
import { container } from "tsyringe";
import { FindRepresentanteByCpfUseCase } from "./FindRepresentanteByCpfUseCase";

class FindRepresentanteByCpfController {

    async handle(request: Request, response: Response): Promise<Response> {

        const cpfRepresentante = String(request.params.cpf);

        const findRepresentanteByCpfUseCase = container.resolve(FindRepresentanteByCpfUseCase);

        const representante = await findRepresentanteByCpfUseCase.execute(cpfRepresentante);

        return response.status(200).json(representante);
    }
}

export { FindRepresentanteByCpfController };

