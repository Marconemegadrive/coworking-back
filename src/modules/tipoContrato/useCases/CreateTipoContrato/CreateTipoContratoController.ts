import { Request, Response } from "express";
import { container } from "tsyringe";
import { CreateTipoContratoUseCase } from "./CreateTipoContratoUseCase";

class CreateTipoContratoController {

    async handle(request: Request, response: Response): Promise<Response> {
        const { idTipoContrato, descricao } = request.body;

        const createTipoContratoUseCase = container.resolve(CreateTipoContratoUseCase);

        try {

            const tipoContrato = await createTipoContratoUseCase.execute({
                idTipoContrato,
                descricao
            });

            return response.status(201).json(tipoContrato);
        } catch(error) {
            return response.status(400).json(error);
        }
    }
}

export { CreateTipoContratoController };