import { Request, Response } from "express";
import { container } from "tsyringe";
import { CreateTipoSalasUseCase } from "./CreateTipoSalasUseCase";

class CreateTipoSalasController {

    async handle(request: Request, response: Response): Promise<Response> {
        
        const { idTipoSalas, tipoSalas} = request.body;

        const createTipoSalasUseCase = container.resolve(CreateTipoSalasUseCase);

        try {

            const tipoSalasCreated = await createTipoSalasUseCase.execute({
                idTipoSalas,
                tipoSalas
            });

            return response.status(201).json(tipoSalas);
        } catch (error) {
            return response.status(400).json(error);
        }
    }

}


export { CreateTipoSalasController};