import { Request, Response} from "express";
import { container } from "tsyringe";
import { ListContratoUseCase } from "./ListContratoUseCase";

class ListContratoController {

    async handle(request: Request, response: Response): Promise<Response> {

        const listContratoUseCase = container.resolve(ListContratoUseCase);

        const contratosAll = await listContratoUseCase.execute();

        return response.status(200).json(contratosAll);
    }
}

export { ListContratoController };