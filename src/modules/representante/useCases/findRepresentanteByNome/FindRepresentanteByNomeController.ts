import { Request, Response } from "express";
import { container } from "tsyringe";
import { FindRepresentanteByNomeUseCase } from "./FindRepresentanteByNomeUseCase";

class FindRepresentanteByNomeController {

    async handle(request: Request, response: Response): Promise<Response> {

        const nome = request.params.nome;
        
        const findRepresentanteByNomeUseCase = container.resolve(FindRepresentanteByNomeUseCase) ;

        const representante = await findRepresentanteByNomeUseCase.execute(nome);
        
        return response.status(200).json(representante);
    }
}

export { FindRepresentanteByNomeController };