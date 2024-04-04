import { Request, Response } from "express";
import { container } from "tsyringe";
import { ListAgendamentoUseCase } from "./ListAgendamentoUseCase";

class ListAgendamentoController {
    async handle(request: Request, response: Response): Promise<Response>{

        const listAgendamentoUseCase = container.resolve(ListAgendamentoUseCase);
        
        try{
            const agendamentos = await listAgendamentoUseCase.execute();
    
            return response.status(200).json(agendamentos);
        }catch (error){
            return response.status(400).json(error);
        }
    }
}
export { ListAgendamentoController }; 