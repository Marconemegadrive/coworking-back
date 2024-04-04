import { Request, Response } from "express";
import { container } from "tsyringe";
import { CreateContratoUseCase } from "./CreateContratoUseCase";

class CreateContratoController {

    async handle(request: Request, response: Response): Promise<Response> {

        const { dataInicio, dataFinal, valor, horaSR, horaSC, qtdBaias, salaTrab,
        idTipoContrato, idCliente } = request.body;

        const createContratoUseCase = container.resolve(CreateContratoUseCase);

        const contrato = await createContratoUseCase.execute({
            dataInicio,
            dataFinal,
            valor, 
            horaSR, 
            horaSC, 
            qtdBaias, 
            salaTrab,
            tipocontrato_idTipoContrato: idTipoContrato, 
            cliente_idCliente: idCliente
        });
        return response.status(201).json(contrato);
    }
}

export { CreateContratoController };