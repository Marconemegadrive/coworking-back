import { Request, Response } from "express";
import { container } from "tsyringe";
import { ListTestemunha_has_ContratoUseCase } from "./ListTestemunha_has_ContratoUseCase";

class ListTestemunha_has_ContratoController {

    async handle(request: Request, response: Response): Promise<Response> {

        const listTestemunha_has_ContratoUseCase = container.resolve(ListTestemunha_has_ContratoUseCase);

        try {
            const testemunhasContratosAll = await listTestemunha_has_ContratoUseCase.execute();

            return response.status(200).json(testemunhasContratosAll);
        } catch (error) {
            return response.status(400).json(error);
        }
    }
}

export { ListTestemunha_has_ContratoController };