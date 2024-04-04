import { Request, Response } from "express";
import { container } from "tsyringe";
import { ListEmailsUseCase } from "./ListEmailsUseCase";

class ListEmailsController {

    async handle(request: Request, response: Response): Promise<Response> {

        const listEmailsUseCase = container.resolve(ListEmailsUseCase);

        try {
            const emailsAll = await listEmailsUseCase.execute();
            return response.status(200).json(emailsAll);
        } catch (error) {
            return response.status(400).json(error);
        }
    }
}

export { ListEmailsController };