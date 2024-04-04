import { Request, Response } from "express";
import { container } from "tsyringe";
import { UpdateTelefoneUseCase } from "./UpdateTelefoneUseCase";

class UpdateTelefoneController {

    async handle(request: Request, response: Response): Promise<Response> {

        const idTelefone = Number(request.params.id);
        const { telefone } = request.body;

        const updateTelefoneUseCase = container.resolve(UpdateTelefoneUseCase);

        try {
            const telefoneUpdate = await updateTelefoneUseCase.execute(idTelefone, telefone);

            return response.status(200).json(telefoneUpdate);
        } catch (error) {
            return response.status(400).json(error);
        }
    }
}

export { UpdateTelefoneController };