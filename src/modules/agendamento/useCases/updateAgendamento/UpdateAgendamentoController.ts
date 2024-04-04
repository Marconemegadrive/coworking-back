import { Request, Response } from "express";
import { container } from "tsyringe";
import { UpdateAgendamentoUseCase } from "./UpdateAgendamentoUseCase";


class UpdateAgendamentoController {
    async handle(request: Request, response: Response): Promise<Response> {

        const idAgendamento = Number(request.params.idAgendamento);
        const { dataAgendamento, horaInicio, horaFim, 
            autorizacao_idAutorizacao, salas_idSala, usuario_idUsuario } = request.body;
        
        const updatedAgendamentoUseCase = container.resolve(UpdateAgendamentoUseCase);

        try{
            const agendamentoUpdated = await updatedAgendamentoUseCase.execute(idAgendamento, dataAgendamento, 
                horaInicio, horaFim, autorizacao_idAutorizacao, salas_idSala, usuario_idUsuario );
            
            return response.status(201).json(agendamentoUpdated);
        } catch (error) {
            return response.status(400).json(error);
        }
    }
}
export { UpdateAgendamentoController };