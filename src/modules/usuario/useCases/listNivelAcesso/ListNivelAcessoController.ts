import { Request, Response } from "express";
import { container } from "tsyringe";
import { ListNivelAcessoUseCase } from "./ListNivelAcessoUseCase";

class ListNivelAcessoController {

    async handle(request: Request, response: Response): Promise<Response> {

        const listNivelAcessoUseCase = container.resolve(ListNivelAcessoUseCase);

        const niveisAcessoAll = await listNivelAcessoUseCase.execute();

        return response.status(200).json(niveisAcessoAll);
    }
}

export { ListNivelAcessoController };