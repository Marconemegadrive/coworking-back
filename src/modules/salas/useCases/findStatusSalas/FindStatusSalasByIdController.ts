import { Request, Response } from "express";
import { FindClienteByIdUseCase } from "../../../cliente/useCases/findClienteById/FindClienteByIdUseCase";
import { container } from "tsyringe";

class FindStatusSalasByIdController {

    async handle(request: Request, response: Response): Promise<Response> {

        const idStatusSalas = Number(request.params.idStatusSalas);

        const findStatusSalasByIdUseCase = container.resolve(FindClienteByIdUseCase);

        try {
            const statusSalas = await findStatusSalasByIdUseCase.execute(idStatusSalas)

            return response.status(200).json(statusSalas);
        } catch (error) {
            return response.status(400).json(error);
        }
    }
}

export { FindStatusSalasByIdController};