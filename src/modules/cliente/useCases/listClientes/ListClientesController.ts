import { Request, Response } from "express";
import { container } from "tsyringe";
import { ListClientesUseCase } from "./ListClientesUseCase";

class ListClientesController {

    async handle(request: Request, response: Response): Promise<Response> {

        const listClientesUseCase = container.resolve(ListClientesUseCase);

        try {
            const clientesAll = await listClientesUseCase.execute();
            
            return response.status(200).json(clientesAll);
        } catch (error) {
            return response.status(400).json(error);
        }
    }
}

export { ListClientesController };