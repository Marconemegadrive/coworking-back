import { Request, Response } from "express";
import { container } from "tsyringe";
import { DeleteRepresentanteUseCase } from "./DeleteRepresentanteUseCase";

class DeleteRepresentanteController {
    async handle(request: Request, response: Response): Promise<Response> {

        const cpfRepresentante = String(request.params.cpf);

        const deleteRepresentanteUseCase = container.resolve(DeleteRepresentanteUseCase);
        const representanteDeleted = await deleteRepresentanteUseCase.execute(cpfRepresentante);

        return response.status(200).json(representanteDeleted);
    }
}

export { DeleteRepresentanteController };