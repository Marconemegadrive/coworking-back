import { container } from "tsyringe";
import { FindAgendamentoByIdUseCase } from "./FindAgendamentoByIdUseCase";
import { Request, Response } from "express";

class FindAgendamentoByIdController {

    async handle(request: Request, response: Response): Promise<Response> {

        const idAgendamento = Number(request.params.idAgendamento);
        
        const findAgendamentoByIdUseCase = container.resolve(FindAgendamentoByIdUseCase);

        try{
            const agendamento = await findAgendamentoByIdUseCase.execute(idAgendamento)
            
            return response.status(200).json(agendamento);
        }catch(error) {
            return response.status(400).json(error);
        }
    }
}
export { FindAgendamentoByIdController };