import { inject, injectable } from "tsyringe";
import { IAgendamentoRepository } from "../../repositories/interfaces/IAgendamentoRepository";
import { Agendamento } from "../../entities/Agendamento";

@injectable()
class ListAgendamentoUseCase {

    constructor(
        @inject("AgendamentoRepository")
        private agendamentoRepository: IAgendamentoRepository
    ){}

    async execute(): Promise<Agendamento[]> {

        const agendamentoAll = await this.agendamentoRepository.list();

        return agendamentoAll;
    }
}

export { ListAgendamentoUseCase };