import { Request, Response } from "express";
import { container } from "tsyringe";
import { DeleteStatusClienteUseCase } from "./DeleteStatusClienteUseCase";

class DeleteStatusClienteController {

    async handle(request: Request, response: Response): Promise<Response> {

        const idStatus = Number(request.params.id);

        const deleteStatusClienteUseCase = container.resolve(DeleteStatusClienteUseCase);

        try {
            const statusClienteDeleted = await deleteStatusClienteUseCase.execute(idStatus);
            return response.status(200).json(statusClienteDeleted);
        } catch (error) {
            return response.status(400).json(error);
        }
    }
}

export { DeleteStatusClienteController };