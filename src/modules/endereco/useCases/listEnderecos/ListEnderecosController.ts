import { Request, Response } from "express";
import { container } from "tsyringe";
import { ListEnderecosUseCase } from "./ListEnderecosUseCase";

class ListEnderecosController {

    async handle(request: Request, response: Response): Promise<Response> {

        const listEnderecosUseCase = container.resolve(ListEnderecosUseCase);

        try {
            const enderecosAll = await listEnderecosUseCase.execute();

            return response.status(200).json(enderecosAll);
        } catch (error) {
            return response.status(400).json(error);
        }
    }
}

export { ListEnderecosController };