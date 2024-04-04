import { Response, Request } from "express";
import { container } from "tsyringe";
import { ListTipoAutorizacaoUseCase } from "./ListTipoAutorizacaoUseCase";

class ListTipoAutorizacaoController {

    async handle(request: Request, response: Response): Promise<Response> {

        const listTipoAutorizacaoUseCase = container.resolve(ListTipoAutorizacaoUseCase);

        try {
            
            const tipoAutorizacaoAll = await listTipoAutorizacaoUseCase.execute();

            return response.status(200).json(tipoAutorizacaoAll);
        }catch (error) {
            return response.status(400).json(error);
        }
    }
}
export { ListTipoAutorizacaoController};