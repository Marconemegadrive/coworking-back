import { Request, Response } from "express";
import { container } from "tsyringe";
import { ListClientesPjUseCase } from "./ListClientesPjUseCase";

class ListClientesPjController {

    async handle(request: Request, response: Response): Promise<Response> {

        const listClientesPjUseCase = container.resolve(ListClientesPjUseCase);

        try {
            const clientesPjAll = await listClientesPjUseCase.execute();

            return response.status(200).json(clientesPjAll);
        } catch (error) {
            return response.status(400).json(error);
        }
    }
}

export { ListClientesPjController };