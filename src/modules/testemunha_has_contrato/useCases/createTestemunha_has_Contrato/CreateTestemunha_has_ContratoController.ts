import { Request, Response } from "express";
import { container } from "tsyringe";
import { CreateTestemunha_has_ContratoUseCase } from "./CreateTestemunha_has_ContratoUseCase";

class CreateTestemunha_has_ContratoController {

    async handle(request: Request, response: Response): Promise<Response> {

        const { Testemunha_idTestemunha, Contrato_idContrato }= request.body;
        console.log("Dados recebidos no controlador:", { Testemunha_idTestemunha, Contrato_idContrato });

        const createTestemunha_has_ContratoUseCase = container.resolve(CreateTestemunha_has_ContratoUseCase);

        try { 
            const testemunha_has_contratoCreated = await createTestemunha_has_ContratoUseCase.execute({
                Testemunha_idTestemunha, 
                Contrato_idContrato
            });
            console.log("Associação criada com sucesso:", testemunha_has_contratoCreated);

            return response.status(201).json(testemunha_has_contratoCreated);
        } catch (error) {
            console.error("Erro ao criar associação:", error);
            return response.status(400).json(error);
        }
    }
}

export { CreateTestemunha_has_ContratoController };