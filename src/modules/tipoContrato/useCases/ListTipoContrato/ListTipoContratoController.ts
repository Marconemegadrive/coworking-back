import { Request, Response} from "express";
import { container } from "tsyringe";
import { ListTipoContratoUseCase } from "./ListTipoContratoUseCase";

class ListTipoContratoController {
    
    async handle(request: Request, response: Response): Promise<Response> {

        const listTipoContratoUseCase = container.resolve(ListTipoContratoUseCase);

        const listTipoContratoAll = await listTipoContratoUseCase.execute();

        return response.status(200).json(listTipoContratoAll);
    }
}

export { ListTipoContratoController}