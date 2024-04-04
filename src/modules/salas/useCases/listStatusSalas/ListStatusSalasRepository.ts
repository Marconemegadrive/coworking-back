import { Response, Request } from "express";
import { container } from "tsyringe";
import { ListStatusSalasUseCase } from "./ListStatusSalasUseCase";

class ListStatusSalasController {

    async handle(request: Request, response: Response): Promise<Response> {

        const listStatusSalasUseCase = container.resolve(ListStatusSalasUseCase);

        try {

            const statusSalasAll = await listStatusSalasUseCase.execute();

            return response.status(200).json(statusSalasAll);
        }catch (error) {
            return response.status(400).json(error);
        }
    }
}

export { ListStatusSalasController};