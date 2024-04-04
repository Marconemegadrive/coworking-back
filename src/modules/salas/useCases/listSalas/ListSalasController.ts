import { container } from "tsyringe";
import { ListSalasUseCase } from "./ListSalasUseCase";
import { Request, Response } from "express";


class ListSalasController {

    async handle(request: Request, response: Response): Promise<Response> {

        const listSalasUseCase = container.resolve(ListSalasUseCase);

        try {
            const salasAll = await listSalasUseCase.execute();

            return response.status(200).json(salasAll);
        }catch (error) {
            return response.status(500).json(error);
        }
    }
}

export { ListSalasController };