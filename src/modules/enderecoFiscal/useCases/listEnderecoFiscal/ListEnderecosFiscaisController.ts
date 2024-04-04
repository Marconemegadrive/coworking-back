import { Request, Response } from "express";
import { container } from "tsyringe";
import { ListEnderecosFiscaisUseCase } from "./ListEnderecosFiscaisUseCase";

export class ListEnderecosFiscaisController {

    async handle(request: Request, response: Response): Promise<Response> {

        const listEnderecosFiscaisUseCase = container.resolve(ListEnderecosFiscaisUseCase);

        try {
            const enderecosFiscaisAll = await listEnderecosFiscaisUseCase.execute();
            
            return response.status(200).json(enderecosFiscaisAll);
        } catch (error) {
            return response.status(400).json(error);
        }
    }
}

