import { Request, Response } from "express";
import { container } from "tsyringe";
import { DeleteClienteCpfUseCase } from "./DeleteClienteCpfUseCase";
import { clienteCpfRoutes } from "../../../../shared/routes/clienteCpf.routes";

class DeleteClienteCpfController {

    async handle(request: Request, response: Response): Promise<Response> {

        const cpf = request.params.cpf;

        const deleteClienteCpfUseCase = container.resolve(DeleteClienteCpfUseCase);

        try {
            const clienteCpfDeleted = await deleteClienteCpfUseCase.execute(cpf);

            return response.status(200).json(clienteCpfDeleted);
        } catch (error) {
            return response.status(400).json(error);
        }
    }
}

export { DeleteClienteCpfController };