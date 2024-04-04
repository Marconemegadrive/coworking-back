import { Request, Response } from "express";
import { container } from "tsyringe";
import { UpdateTipoContratoUseCase } from "./UpdateTipoContratoUseCase";

class UpdateTipoContratoController {

    async handle(request: Request, response: Response): Promise<Response>{

        const idTipoContrato = Number(request.params.id);
        const { descricao } = request.body;

        const updateTipoContratoUseCase = container.resolve(UpdateTipoContratoUseCase);
        const tipoContratoUpdated = await updateTipoContratoUseCase.execute(idTipoContrato,
            {
                descricao
            });
            return response.status(200).json(tipoContratoUpdated);
    }
}

export { UpdateTipoContratoController };