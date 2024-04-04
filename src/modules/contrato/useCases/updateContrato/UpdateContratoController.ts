import { Request, Response } from "express";
import { container } from "tsyringe";
import { UpdateContratoUseCase } from "./UpdateContratoUseCase";

class UpdateContratoController {

    async handle(request: Request, response: Response): Promise<Response> {

        const idContrato = Number(request.params.id);
        const { dataInicio, dataFinal, valor, horaSR, horaSC, qtdBaias, salaTrab, dataAtualizacao } = request.body;

        const updateContratoUseCase = container.resolve(UpdateContratoUseCase);

        try { 
            const contratoUpdated = await updateContratoUseCase.execute(idContrato, {
                dataInicio,
                dataFinal, 
                valor, 
                horaSR, 
                horaSC, 
                qtdBaias, 
                salaTrab, 
                dataAtualizacao 
            });
            
            return response.status(200).json(contratoUpdated);
        } catch(error) {
            return response.status(400).json(error);
        }
    }
}

export { UpdateContratoController };