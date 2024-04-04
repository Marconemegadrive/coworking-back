import { Request, Response } from "express";
import { DeleteContratoUseCase } from "./DeleteContratoUseCase";
import { container } from "tsyringe";

class DeleteContratoController {

    async handle(request: Request, response: Response): Promise<Response> {

        const idContrato = Number(request.params.id);

        const deleteContratoUseCase = container.resolve(DeleteContratoUseCase);

        try {
            const contratoDeleted = await deleteContratoUseCase.execute(idContrato);

            return response.status(200).json(contratoDeleted);
        } catch(error) {
            return response.status(400).json(error);
        }
    }
}

export { DeleteContratoController };