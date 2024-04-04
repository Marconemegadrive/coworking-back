import { Request, Response } from "express";
import { container } from "tsyringe";
import { ListTelefonesUseCase } from "./ListTelefonesUseCase";

class ListTelefoneController {

    async handle(request: Request, response: Response): Promise<Response> {

        const listTelefoneUseCase = container.resolve(ListTelefonesUseCase);

        try {
            const telefonesAll = await listTelefoneUseCase.execute();

            return response.status(200).json(telefonesAll);
        } catch (error) {
            return response.status(400).json(error);
        }
    }
}

export { ListTelefoneController };