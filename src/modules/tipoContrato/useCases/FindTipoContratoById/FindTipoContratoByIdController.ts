import { Request, Response } from "express";
import { container } from "tsyringe";
import { FindTipoContratoByIdUseCase } from "./FindTipoContratoByIdUseCase";

class FindTipoContratoByIdController {

    async handle(request: Request, response: Response): Promise<Response> {

        const idTipoContrato = Number(request.params.id);

        const findTipoContratoByIdUseCase = container.resolve(FindTipoContratoByIdUseCase);

        try {
            const tipoContratoFound = await findTipoContratoByIdUseCase.execute(idTipoContrato);

            return response.status(200).json(tipoContratoFound);
        } catch(error) {
            return response.status(400).json(error);
        }
    }
}

export { FindTipoContratoByIdController };