import { Request, Response } from "express";
import { DeleteTelefoneUseCase } from "./DeleteTelefoneUseCase";
import { container } from "tsyringe";

class DeleteTelefoneController {

    async handle(request: Request, response: Response): Promise<Response> {

        const idTelefone = Number(request.params.id);

        const deleteTelefoneUseCase = container.resolve(DeleteTelefoneUseCase);

        try {
            const telefoneDeleted = await deleteTelefoneUseCase.execute(idTelefone);

            return response.status(200).json(telefoneDeleted);
        } catch (error) {
            return response.status(400).json(error);
        }
    }
}

export { DeleteTelefoneController }