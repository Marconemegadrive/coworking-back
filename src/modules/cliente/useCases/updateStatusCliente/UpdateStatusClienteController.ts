import { Request, Response } from "express";
import { container } from "tsyringe";
import { UpdateStatusClienteUseCase } from "./UpdateStatusClienteUseCase";

class UpdateStatusClienteController {

    async handle(request: Request, response: Response): Promise<Response> {

        const idStatus = Number(request.params.id);
        const { tipo } = request.body;

        const updateStatusClienteUseCase = container.resolve(UpdateStatusClienteUseCase);

        try {
            const statusClienteUpdate = await updateStatusClienteUseCase.execute(idStatus, tipo);
            return response.status(200).json(statusClienteUpdate);
        } catch (error) {
            return response.status(400).json(error);
        }
    }
}

export { UpdateStatusClienteController };