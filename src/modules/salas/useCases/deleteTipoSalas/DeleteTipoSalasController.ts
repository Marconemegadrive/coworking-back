import { Request, Response } from "express";
import { container } from "tsyringe";
import { DeleteTipoSalasUseCase } from "./DeleteTipoSalasUseCase";



class DeleteTipoSalasController {

    async handle(request: Request, response: Response ): Promise<Response> {

        const idTipoSalas = Number(request.params.idTipoSalas);

        const deleteTipoSalasUseCase = container.resolve(DeleteTipoSalasUseCase);

        try {
            const tipoSalasDeleted = await deleteTipoSalasUseCase.execute(idTipoSalas);

            return response.status(200).json(tipoSalasDeleted);
        } catch (error) {
            return response.status(400).json(error);
        }
    }
}

export { DeleteTipoSalasController};