import { Request, Response } from "express";
import { container } from "tsyringe";
import { DeleteEmailUseCase } from "./DeleteEmailUseCase";

class DeleteEmailController {

    async handle(request: Request, response: Response): Promise<Response> {

        const idEmail = Number(request.params.id);

        const deleteEmailUseCase = container.resolve(DeleteEmailUseCase);

        try {
            const emailDeleted = await deleteEmailUseCase.execute(idEmail);
            return response.status(200).json(emailDeleted);
        } catch (error) {
            return response.status(400).json(error);
        }
    }
}

export { DeleteEmailController };