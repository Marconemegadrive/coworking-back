import { Request, Response } from "express";
import { container } from "tsyringe";
import { DeleteClientePjUseCase } from "./DeleteClientePjUseCase";

class DeleteClientePjController {

    async handle(request: Request, response: Response): Promise<Response> {

        const cnpj = request.params.cnpj;

        const deleteClientePjUseCase = container.resolve(DeleteClientePjUseCase);

        try {
            const clientePjDeleted = await deleteClientePjUseCase.execute(cnpj);

            return response.status(200).json(clientePjDeleted);
        } catch (error) {
            return response.status(400).json(error);
        }
    }
}

export { DeleteClientePjController };