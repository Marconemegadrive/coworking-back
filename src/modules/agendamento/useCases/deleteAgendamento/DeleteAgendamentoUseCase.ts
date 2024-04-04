import { inject, injectable } from "tsyringe";
import { IAgendamentoRepository } from "../../repositories/interfaces/IAgendamentoRepository";
import { Agendamento } from "../../entities/Agendamento";
import { AppError } from "../../../../shared/errors/AppError";

@injectable()
class DeleteAgendamentoUseCase {

    constructor(
        @inject("AgendamentoRepository")
        private agendamentoRepository: IAgendamentoRepository
    ){}

    async execute(idAgendamento: number): Promise<Agendamento> {

        const agendamentoFound = await this.agendamentoRepository.findById(idAgendamento);

        if(!agendamentoFound) {
            throw new AppError("Agendamento não encontrado");
        }

        const agendamentoDelete = await this.agendamentoRepository.delete(idAgendamento);

        return agendamentoDelete;
    }
}
export { DeleteAgendamentoUseCase };
