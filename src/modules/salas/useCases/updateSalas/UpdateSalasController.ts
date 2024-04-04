import { Request, Response } from "express";
import { UpdateSalasUseCase } from "./UpdateSalasUseCase";
import { container } from "tsyringe";

class UpdateSalasController {

    async handle(request: Request, response: Response): Promise<Response> {

        const idSala = Number(request.params.idSala);
        const { nome } = request.body;
        const { qtdPessoas } = request.body;
        const { obs } = request.body;
        const { StatusSalas_idStatus1 } = request.body;
        const { TipoSalas_idTipoSalas1 } = request.body;
    
        const updateSalasUseCase = container.resolve(UpdateSalasUseCase);
        
        try {
            const salasUpdated = await updateSalasUseCase.execute(
                idSala, nome, qtdPessoas, obs, StatusSalas_idStatus1, TipoSalas_idTipoSalas1);
                
            return response.status(200).json(salasUpdated);
        }catch (error) {
            return response.status(400).json(error);
        }
    }
}

export { UpdateSalasController };