import { Request, Response } from "express";
import { container } from "tsyringe";
import { UpdateTipoSalasUseCase } from "./UpdateTipoSalasUseCase";

class UpdateTipoSalasController {

    async handle(request: Request, response: Response): Promise<Response> {

        const idTipoSalas = Number(request.params.idTipoSalas);
        const { tipo } = request.body;

        const updateTipoSalasUseCase = container.resolve(UpdateTipoSalasUseCase);

        try {
            const tipoSalasUpdated = updateTipoSalasUseCase.execute(idTipoSalas, tipo);

            return response.status(200).json(tipoSalasUpdated);
        } catch (error){
            return response.status(400).json(error);
        }
    }  
}
export {UpdateTipoSalasController};