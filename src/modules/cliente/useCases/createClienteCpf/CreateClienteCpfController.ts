import { Request, Response } from "express";
import { container } from "tsyringe";
import { CreateClienteCpfUseCase } from "./CreateClienteCpfUseCase";

class CreateClienteCpfController {

    async handle(request: Request, response: Response): Promise<Response> {

        const { cpf, nome, dataNasc, Cliente_idCliente, usuario_idUsuario } = request.body;

        const createClienteCpfUseCase = container.resolve(CreateClienteCpfUseCase);

        try {
            const clienteCpfCreated = await createClienteCpfUseCase.handle({
                cpf, 
                nome, 
                dataNasc, 
                Cliente_idCliente, 
                usuario_idUsuario
            });

            return response.status(201).json(clienteCpfCreated);
        } catch (error) {
            return response.status(400).json(error);
        }
    }
}

export { CreateClienteCpfController };