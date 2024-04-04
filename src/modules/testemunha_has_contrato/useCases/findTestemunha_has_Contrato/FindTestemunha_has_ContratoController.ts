import { Request, Response } from "express";
import { container } from "tsyringe";
import { FindTestemunha_has_ContratoUseCase } from "./FindTestemunha_has_ContratoUseCase";

class FindTestemunha_has_ContratoController {

    async handle(request: Request, response: Response): Promise<Response> {

        const testemunha_idTestemunha = Number(request.params.id);

        const findTestemunha_has_ContratoUseCase = container.resolve(FindTestemunha_has_ContratoUseCase)

        try {
            const testemunha_has_ContratoFound = await findTestemunha_has_ContratoUseCase.execute(testemunha_idTestemunha);

            return response.status(200).json(testemunha_has_ContratoFound);
        } catch (error) {
            return response.status(400).json(error);
        }
    }
}

export { FindTestemunha_has_ContratoController };