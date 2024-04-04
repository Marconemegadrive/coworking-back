import { inject, injectable } from "tsyringe";
import { IAgendamentoRepository } from "../../repositories/interfaces/IAgendamentoRepository";
import { ICreateAgendamentoDTO } from "../../repositories/dtos/ICreateAgendamentoDTO";
import { Agendamento } from "../../entities/Agendamento";

@injectable()
class CreateAgendamentoUseCase {
    
    constructor(
        @inject("AgendamentoRepository")
        private agendamentoRepository: IAgendamentoRepository
    ){}

    async execute({
        dataAgendamento,
        horaInicio,
        horaFim,
        autorizacao_idAutorizacao,
        salas_idSala,
        usuario_idUsuario }: ICreateAgendamentoDTO): Promise<Agendamento> {

            const agendamento = await this.agendamentoRepository.create({
                dataAgendamento,
                horaInicio,
                horaFim,
                autorizacao_idAutorizacao,
                salas_idSala,
                usuario_idUsuario
            });
            
            return agendamento;
        }
}
export { CreateAgendamentoUseCase };