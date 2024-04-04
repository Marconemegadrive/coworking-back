import { Request, Response} from "express";
import { container } from "tsyringe";
import { CreateSalasUseCase } from "./CreateSalasUseCase";

class CreateSalasController {

    async handle(request: Request, response: Response): Promise<Response> {

        const { nome, qtdPessoas, obs, StatusSalas_idStatus1, TipoSalas_idTipoSalas1 } = request.body;

        const createSalasUseCase = container.resolve(CreateSalasUseCase);

            try {
                const salasCreate = await createSalasUseCase.execute({
                    nome, 
                    qtdPessoas, 
                    obs, 
                    StatusSalas_idStatus1, 
                    TipoSalas_idTipoSalas1 
                });
    
                return response.status(201).json(salasCreate);
            } catch (error) {
                return response.status(400).json(error);
            }
    }
}
export { CreateSalasController };