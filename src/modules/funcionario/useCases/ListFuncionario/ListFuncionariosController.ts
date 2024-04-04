import { Request, Response} from "express";
import { container } from "tsyringe";
import { ListFuncionariosUseCase } from "./ListFuncionariosUseCase";

class ListFuncionariosController {

    async handle(request: Request, response: Response): Promise<Response> {

        const listFuncionariosUseCase = container.resolve(ListFuncionariosUseCase);

        const funcionariosAll = await listFuncionariosUseCase.execute();

        return response.status(200).json(funcionariosAll);

    }
}

export { ListFuncionariosController };

