import { container } from "tsyringe";
import { DeleteAgendamentoUseCase } from "./DeleteAgendamentoUseCase";
import { Request, Response} from "express";

class DeleteAgendamentoController {

    async handle(request: Request, response: Response): Promise<Response> {

        const idAgendamento = Number (request.params.idAgendamento);

        const deleteAgendamentoUseCase = await container.resolve(DeleteAgendamentoUseCase);

        try{
            const agendamentoDeleted = await deleteAgendamentoUseCase.execute(idAgendamento);

            return response.status(201).json(agendamentoDeleted);
    }catch (error) {
        return response.status(400).json(error);
       }
    }
}
export { DeleteAgendamentoController };