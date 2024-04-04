import { Request, Response } from "express";
import { container } from "tsyringe";
import { CreateStatusSalasUseCase } from "./CreateStatusSalasUseCase";

class CreateStatusSalasController {
   

    async handle(request: Request, response: Response): Promise<Response> {

        const { idStatusSalas, statusSalas } = request.body;

        const createStatusSalasUseCase = container.resolve(CreateStatusSalasUseCase);

        try {
            const statusSalasCreated = await createStatusSalasUseCase.execute({
                idStatusSalas,
                statusSalas
            });
            
            return response.status(200).json(statusSalasCreated);
        }catch (error){
            return response.status(400).json(error);
        }
    }
}   
export { CreateStatusSalasController};