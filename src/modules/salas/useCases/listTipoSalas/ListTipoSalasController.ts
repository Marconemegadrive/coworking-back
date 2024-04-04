import { Request, Response } from "express";
import { container } from "tsyringe";
import { ListTipoSalasUseCase } from "./ListTipoSalasUseCase"

class ListTipoSalasController {

    async handle(request: Request, response: Response): Promise<Response> {

        const listTipoSalasUseCase = container.resolve(ListTipoSalasUseCase);

        try {
            
            const tipoSalasAll = await listTipoSalasUseCase.execute();

            return response.status(200).json(tipoSalasAll);
        } catch (error) {
            return response.status(400).json(error);
        }
    }      
}

export { ListTipoSalasController};