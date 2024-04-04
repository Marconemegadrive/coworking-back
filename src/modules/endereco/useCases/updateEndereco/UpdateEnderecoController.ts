import { Request, Response } from "express";
import { container } from "tsyringe";
import { UpdateEnderecoUseCase } from "./UpdateEnderecoUseCase";

class UpdateEnderecoController {

    async handle(request: Request, response: Response): Promise<Response> {

        const idCliente = Number(request.params.idCliente);
        const { uf, cep, cidade, bairro, rua, numero, complemento, obs } = request.body;

        const updateEnderecoUseCase = container.resolve(UpdateEnderecoUseCase);

        try {
            const enderecoUpdated = await updateEnderecoUseCase.execute(idCliente, {
                uf, 
                cep, 
                cidade, 
                bairro, 
                rua, 
                numero, 
                complemento, 
                obs
            });

            return response.status(200).json(enderecoUpdated);
        } catch (error) {
            return response.status(400).json(error);
        }
    }
}

export { UpdateEnderecoController };