import { Request, Response} from "express";
import { container } from "tsyringe";
import { ListUsuariosUseCase } from "./ListUsuariosUseCase";

class ListUsuariosController {

    async handle(request: Request, response: Response): Promise<Response> {

        const listUsuariosUseCase = container.resolve(ListUsuariosUseCase);

        const usuariosAll = await listUsuariosUseCase.execute();

        return response.status(200).json(usuariosAll);
    }
}

export { ListUsuariosController }; 
