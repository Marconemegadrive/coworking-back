import { Request, Response } from "express";
import { container } from "tsyringe";
import { UpdateRepresentanteByCpfUseCase } from "./UpdateRepresentanteByCpfUseCase";

class UpdateRepresentanteByCpfController {

    async handle(request: Request, response: Response): Promise<Response> {

        const cpfRepresentante = String(request.params.cpf);
        const { nome, email, telefone, cnpj, idUsuario } = request.body;

        const updateRepresentanteUseCase = container.resolve(UpdateRepresentanteByCpfUseCase);
        const representanteUpdated = await updateRepresentanteUseCase.execute(cpfRepresentante, {
            nome,
            email, 
            telefone, 
            cnpj, 
            idUsuario
        });
        return response.status(200).json(representanteUpdated);
    }
}

export { UpdateRepresentanteByCpfController };

