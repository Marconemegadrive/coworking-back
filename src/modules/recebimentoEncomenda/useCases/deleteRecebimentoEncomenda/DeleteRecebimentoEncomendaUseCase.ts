import { inject, injectable } from "tsyringe";
import { IRecebimentoEncomendaRepository } from "../../repositories/interfaces/IRecebimentoEncomendaRepository";
import { RecebimentoEncomenda } from "../../entities/RecebimentoEncomenda";
import { AppError } from "../../../../shared/errors/AppError";

@injectable()
class DeleteRecebimentoEncomendaUseCase {

    constructor(
        @inject("EncomendaRepository")
        private recebimentoEncomendaRepository: IRecebimentoEncomendaRepository
    ) {}

    async execute(idRecebimentoEncomenda: number): Promise<RecebimentoEncomenda> {
        const recebimentoEncomendaExists = await this.recebimentoEncomendaRepository.findRecebimentoEncomendaById(idRecebimentoEncomenda);

        if(!recebimentoEncomendaExists) {
            throw new AppError("RecebimentoEncomenda inexistente!");
        }

        const recebimentoEncomendaDeletada = await this.recebimentoEncomendaRepository.deleteRecebimentoEncomenda(idRecebimentoEncomenda);

        return recebimentoEncomendaDeletada;
    }
}

export { DeleteRecebimentoEncomendaUseCase };