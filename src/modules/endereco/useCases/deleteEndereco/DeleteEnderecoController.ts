import { Request, Response } from "express";
import { container } from "tsyringe";
import { DeleteEnderecoUseCase } from "./DeleteEnderecoUseCase";

class DeleteEnderecoController {

    async handle(request: Request, response: Response): Promise<Response> {

        const idCliente = Number(request.params.idCliente);

        const deleteEnderecoUseCase = container.resolve(DeleteEnderecoUseCase);

        try {
            const enderecoDeleted = await deleteEnderecoUseCase.execute(idCliente);

            return response.status(200).json(enderecoDeleted);
        } catch (error) {
            return response.status(400).json(error);
        }
    }
}

export { DeleteEnderecoController };