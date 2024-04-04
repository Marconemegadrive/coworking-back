import { Request, Response } from "express";
import { DeleteTipoContratoUseCase } from "./DeleteTipoContratoUseCase";
import { container } from "tsyringe";

class DeleteTipoContratoController {

    async handle(request: Request, response: Response): Promise<Response> {
        
        const idTipoContrato = Number(request.params.id);

        const deleteTipoContratoUseCase = container.resolve(DeleteTipoContratoUseCase);

        try { 
            const tipoContratoDeleted = await deleteTipoContratoUseCase.execute(idTipoContrato);

            return response.status(200).json(tipoContratoDeleted);
        } catch (error) {
            return response.status(400).json(error);
        }
    }
}

export { DeleteTipoContratoController }