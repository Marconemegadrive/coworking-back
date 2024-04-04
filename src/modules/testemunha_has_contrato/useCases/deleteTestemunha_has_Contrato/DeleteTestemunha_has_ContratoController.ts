import { Request, Response } from "express";
import { DeleteTestemunha_has_ContratoUseCase } from "./DeleteTestemunha_has_ContratoUseCase";
import { container } from "tsyringe";

class DeleteTestemunha_has_ContratoController {

    async handle(request: Request, response: Response): Promise<Response> {

        const { Testemunha_idTestemunha, Contrato_idContrato } = request.params;
        
        const parsedTestemunhaId = parseInt(Testemunha_idTestemunha);
        const parsedContratoId = parseInt(Contrato_idContrato);

        const deleteTestemunha_has_ContratoUseCase = container.resolve(DeleteTestemunha_has_ContratoUseCase);

        try { 
            await deleteTestemunha_has_ContratoUseCase.execute(parsedTestemunhaId, parsedContratoId);

            return response.status(200).json({ message: 'Deleção bem sucedida.' });
        } catch (error) {
            return response.status(400).json(error);
        }
    }

}

export { DeleteTestemunha_has_ContratoController };