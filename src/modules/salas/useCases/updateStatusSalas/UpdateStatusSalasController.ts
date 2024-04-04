import { Request, Response } from "express";
import { container } from "tsyringe";
import { UpdateStatusSalasUseCase } from "./UpdateStatusSalasUseCase";

class UpdateStatusSalasController {

    async handle(request: Request, response: Response): Promise<Response> {

        const idStatusSalas = Number(request.params.idStatusSalas);
        const { statusSalas } = request.body;

        const updateStatusSalasUseCase = container.resolve(UpdateStatusSalasUseCase);

        try {
            const statusSalasUpdated = updateStatusSalasUseCase.execute(idStatusSalas, statusSalas)

            return response.status(200).json(statusSalasUpdated);
        } catch (error) {
            return response.status(400).json(error);
        }
    }
}
export { UpdateStatusSalasController };