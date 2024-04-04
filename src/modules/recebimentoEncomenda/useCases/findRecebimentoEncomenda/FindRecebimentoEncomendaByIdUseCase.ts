import { inject, injectable } from "tsyringe";
import { IRecebimentoEncomendaRepository } from "../../repositories/interfaces/IRecebimentoEncomendaRepository";
import {RecebimentoEncomenda } from "../../entities/RecebimentoEncomenda";
import { AppError } from "../../../../shared/errors/AppError";

@injectable()
class FindRecebimentoEncomendaByIdUseCase {

    constructor(
        @inject("RecebimentoEncomendaRepository")
        private recebimentoEncomendaRepository: IRecebimentoEncomendaRepository
    ) {}

    async execute(idRecebimentoEncomenda: number): Promise<RecebimentoEncomenda> {
        
        const recebimentoEncomenda = await this.recebimentoEncomendaRepository.findRecebimentoEncomendaById(idRecebimentoEncomenda);

        if(!recebimentoEncomenda) {
            throw new AppError("RecebimentoEncomenda inexistente!");
        }
        return recebimentoEncomenda;
    }
}

export { FindRecebimentoEncomendaByIdUseCase };