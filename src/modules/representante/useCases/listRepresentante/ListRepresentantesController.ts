import { Request, Response} from "express";
import { container } from "tsyringe";
import { ListRepresentantesUseCase } from "./ListRepresentantesUseCase";

export class ListRepresentantesController {

    async handle(request: Request, response: Response): Promise<Response> {

        const listRepresentantesUseCase = container.resolve(ListRepresentantesUseCase);

        const representantesAll = await listRepresentantesUseCase.execute();

        return response.status(200).json(representantesAll);

    }
}
