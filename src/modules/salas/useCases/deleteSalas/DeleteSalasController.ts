import { Request, Response } from "express";
import { DeleteSalasUseCase } from "./DeleteSalasUseCase";
import { container } from "tsyringe";

class DeleteSalasController {

    async handle(request: Request, response: Response): Promise<Response> {

        const idSala = Number(request.params.id);

        const deleteSalasUseCase = container.resolve(DeleteSalasUseCase);

        try{
            const salasDelete = await deleteSalasUseCase.execute(idSala);

            return response.status(200).json(salasDelete);
        }catch (error) {
            return response.status(500).json(error);
        }
    }
}

export { DeleteSalasController };