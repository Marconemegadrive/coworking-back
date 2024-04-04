import { Request, Response } from "express";
import { container } from "tsyringe";
import { FindEnderecoFiscalByIdUseCase } from "./FindEnderecoFiscalByIdUseCase";

class FindEnderecoFiscalByIdController {

    async handle(request: Request, response: Response): Promise<Response> {

        const idEndFiscal = Number(request.params.id);

        const findEnderecoFiscalByIdUseCase = container.resolve(FindEnderecoFiscalByIdUseCase);

        const enderecoFiscal = await findEnderecoFiscalByIdUseCase.execute(idEndFiscal);

        return response.status(200).json(enderecoFiscal);
    }
}

export { FindEnderecoFiscalByIdController };
