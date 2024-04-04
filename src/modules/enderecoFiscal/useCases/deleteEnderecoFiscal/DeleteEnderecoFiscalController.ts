import { Request, Response } from "express";
import { container } from "tsyringe";
import { DeleteEnderecoFiscalUseCase } from "./DeleteEnderecoFiscalUseCase";

class DeleteEnderecoFiscalController {
    async handle(request: Request, response: Response): Promise<Response> {

        const idEnderecoFiscal = Number(request.params.id);

        const deleteEnderecoFiscalUseCase = container.resolve(DeleteEnderecoFiscalUseCase);
        const enderecoFiscalDeleted = await deleteEnderecoFiscalUseCase.execute(idEnderecoFiscal);

        return response.status(200).json(enderecoFiscalDeleted);
    }
}

export { DeleteEnderecoFiscalController };