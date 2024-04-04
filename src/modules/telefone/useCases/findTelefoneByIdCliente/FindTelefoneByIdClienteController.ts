import { Request, Response } from "express";
import { container } from "tsyringe";
import { FindTelefoneByIdClienteUseCase } from "./FindTelefoneByIdClienteUseCase";

class FindTelefoneByIdClienteController {

    async handle(request: Request, response: Response): Promise<Response> {

        const idCliente = Number(request.params.idCliente);

        const findTelefoneByIdClienteUseCase = container.resolve(FindTelefoneByIdClienteUseCase);

        try {
            const telefoneFound = await findTelefoneByIdClienteUseCase.execute(idCliente);

            return response.status(200).json(telefoneFound);
        } catch (error) {
            return response.status(400).json(error);
        }
    }
}

export { FindTelefoneByIdClienteController };