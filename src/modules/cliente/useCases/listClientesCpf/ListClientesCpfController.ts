import { Request, Response } from "express";
import { container } from "tsyringe";
import { ListClientesCpfUseCase } from "./ListClientesCpfUseCase";

class ListClientesCpfController {

    async handle(request: Request, response: Response): Promise<Response> {

        const listClientesCpfUseCase = container.resolve(ListClientesCpfUseCase);

        try {
            const clientesCpfAll = await listClientesCpfUseCase.execute();

            return response.status(200).json(clientesCpfAll);
        } catch (error) {
            return response.status(400).json(error);
        }
    }
}

export { ListClientesCpfController };