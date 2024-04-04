import { Request, Response } from "express";
import { container } from "tsyringe";
import { ListStatusClienteUseCase } from "./ListStatusClienteUseCase";

class ListStatusClienteController {

    async handle(request: Request, response: Response): Promise<Response> {

        const listStatusClienteUseCase = container.resolve(ListStatusClienteUseCase);

        try {
            const statusClienteAll = await listStatusClienteUseCase.execute();
            return response.status(200).json(statusClienteAll);
        } catch (error) {
            return response.status(400).json(error);
        }
    }
}

export { ListStatusClienteController };