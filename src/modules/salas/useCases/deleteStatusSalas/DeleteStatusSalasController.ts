import { Request, Response } from "express";
import { container } from "tsyringe";
import { DeleteStatusSalasUseCase } from "../deleteStatusSalas/DeleteStatusSalasUseCase";


class DeleteStatusSalasController {

    async handle(request: Request, response: Response ): Promise<Response> {

        const idStatusSalas = Number(request.params.idTipoSalas);

        const deleteStatusSalasUseCase = container.resolve(DeleteStatusSalasUseCase);

        try {
            const statusSalasDeleted = await deleteStatusSalasUseCase.execute(idStatusSalas);

            return response.status(200).json(statusSalasDeleted);
        } catch (error) {
            return response.status(400).json(error);
        }
    }
}

export { DeleteStatusSalasController};