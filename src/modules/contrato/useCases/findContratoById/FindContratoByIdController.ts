import { Request, Response } from "express";
import { container } from "tsyringe";
import { FindContratoByIdUseCase } from "./FindContratoByIdUseCase";

class FindContratoByIdController {

    async handle(request: Request, response: Response): Promise<Response> {

        const idContrato = Number(request.params.id);

        const findContratoByIdUseCase = container.resolve(FindContratoByIdUseCase);

        try {
            const contratoFound = await findContratoByIdUseCase.execute(idContrato);
            return response.status(200).json(contratoFound);
        } catch(error) {
            return response.status(400).json(error);
        }
    }
}

export { FindContratoByIdController };