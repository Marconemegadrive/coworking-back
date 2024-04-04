import { CreateAgendamentoUseCase } from "./CreateAgendamentoUseCase";
import { Request, Response, } from "express";
import { container } from "tsyringe";

class CreateAgendamentoController {

    async handle(request: Request, response: Response): Promise<Response> {

        const  { dataAgendamento, horaInicio, horaFim, autorizacao_idAutorizacao, 
            salas_idSala, usuario_idUsuario } = request.body;

        const createAgendamentoUseCase = container.resolve(CreateAgendamentoUseCase);
        
        try{
            const agendamentoCreated = await  createAgendamentoUseCase.execute({
                dataAgendamento, horaInicio, horaFim, autorizacao_idAutorizacao, salas_idSala, usuario_idUsuario });

            return response.status(201).json(agendamentoCreated);
        } catch (error) {
            return response.status(400).json(error);
        }
    }
}
export { CreateAgendamentoController };