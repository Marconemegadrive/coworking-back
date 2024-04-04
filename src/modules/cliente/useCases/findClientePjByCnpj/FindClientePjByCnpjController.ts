import { Request, Response } from "express";
import { FindClientePjByCnpjUseCase } from "./FindClientePjByCnpjUseCase";
import { container } from "tsyringe";

class FindClientePjByCnpjController {

    async handle(request: Request, response: Response): Promise<Response> {

        const cnpj = request.params.cnpj;

        const findClientePjByCnpjUseCase = container.resolve(FindClientePjByCnpjUseCase);

        try {
            const clientePjFound = await findClientePjByCnpjUseCase.execute(cnpj);

            return response.status(200).json(clientePjFound);
        } catch (error) {
            return response.status(400).json(error);
        }
    }
}

export { FindClientePjByCnpjController };