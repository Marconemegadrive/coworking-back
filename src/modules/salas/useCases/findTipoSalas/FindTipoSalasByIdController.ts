import { Request, Response } from "express";
import { container } from "tsyringe";
import { FindTipoSalasByIdUseCase } from "./FindTipoSalasByIdUseCase";
class FindTipoSalasByIdController {

    async handle(request: Request, response: Response): Promise<Response> {

        const idTipoSalas = Number(request.params.idTipoSalas);

        const findTipoSalasByIdUseCase = container.resolve(FindTipoSalasByIdUseCase);

        try {
            const tipoSalas = await findTipoSalasByIdUseCase.execute(idTipoSalas)

            return response.status(200).json(tipoSalas);
        } catch (error) {
            return response.status(400).json(error);
        }
    }
}

export { FindTipoSalasByIdController};