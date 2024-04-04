import { Request, Response } from "express";
import { container } from "tsyringe";
import { UpdateEnderecoFiscalByIdUseCase } from "./UpdateEnderecoFiscalByIdUseCase";

class UpdateEnderecoFiscalByIdController {

    async handle(request: Request, response: Response): Promise<Response> {

        const idEnderecoFiscal = Number(request.params.id);
        const { statusEndFiscal, idCliente} = request.body;

        const updateEnderecoFiscalUseCase = container.resolve(UpdateEnderecoFiscalByIdUseCase);
        const enderecoFiscalUpdated = await updateEnderecoFiscalUseCase.execute(idEnderecoFiscal, {
            statusEndFiscal,
            idCliente
        });
        return response.status(200).json(enderecoFiscalUpdated);
    }
}

export { UpdateEnderecoFiscalByIdController };
