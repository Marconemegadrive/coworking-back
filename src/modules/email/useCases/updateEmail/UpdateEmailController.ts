import { Request, Response } from "express";
import { container } from "tsyringe";
import { UpdateEmailUseCase } from "./UpdateEmailUseCase";

class UpdateEmailController {

    async handle(request: Request, response: Response): Promise<Response> {

        const idEmail = Number(request.params.id);
        const { email } = request.body;

        const updateEmailUseCase = container.resolve(UpdateEmailUseCase);

        try {
            const emailUpdated = await updateEmailUseCase.execute(idEmail, email);
            return response.status(200).json(emailUpdated);
        } catch (error) {
            return response.status(400).json(error);
        }
    }
}

export { UpdateEmailController };