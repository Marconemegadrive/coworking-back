import { inject, injectable } from "tsyringe";
import { IAgendamentoRepository } from "../../repositories/interfaces/IAgendamentoRepository";
import { Agendamento } from "../../entities/Agendamento";
import { AppError } from "../../../../shared/errors/AppError";

@injectable()
class UpdateAgendamentoUseCase {

    constructor(
        @inject("AgendamentoRepository")
        private agendamentoRepository: IAgendamentoRepository
    ){}

    async execute (
        idAgendamento: number,
        dataAgendamento: Date,
        horaInicio: string,
        horaFim: string,
        autorizacao_idAutorizacao: number,
        salas_idSala: number,
        usuario_idUsuario: number ): Promise<Agendamento> {

            const agendamentoFound = await this.agendamentoRepository.findById(idAgendamento);
            
            if(!agendamentoFound) {
                throw new AppError ("Agendamento não encontrado");
            }

            const agendamentoUpdated = await this.agendamentoRepository.update(
                idAgendamento,
                dataAgendamento,
                horaInicio,
                horaFim,
                autorizacao_idAutorizacao,
                salas_idSala,
                usuario_idUsuario);

            return agendamentoUpdated;
        }
}
export {UpdateAgendamentoUseCase};