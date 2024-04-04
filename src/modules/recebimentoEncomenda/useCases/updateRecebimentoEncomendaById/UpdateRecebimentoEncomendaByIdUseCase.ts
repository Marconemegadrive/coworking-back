import { inject, injectable } from "tsyringe";
import { IRecebimentoEncomendaRepository } from "../../repositories/interfaces/IRecebimentoEncomendaRepository";
import { RecebimentoEncomenda } from "../../entities/RecebimentoEncomenda";
import { AppError } from "../../../../shared/errors/AppError";
import { IUpdateRecebimentoEncomendaDTO } from "../../repositories/dtos/IUpdateRecebimentoEncomendaDTO";

@injectable()
class UpdateRecebimentoEncomendaByIdUseCase {

    constructor(
        @inject("RecebimentoEncomendaRepository")
        private recebimentoEncomendaRepository: IRecebimentoEncomendaRepository
    ) { }

    async execute(idRecebimentoEncomenda: number, { obsRecEncomenda, idEncomenda }: IUpdateRecebimentoEncomendaDTO): Promise<RecebimentoEncomenda> {

        const recebimentoEncomendaExist = await this.recebimentoEncomendaRepository.findRecebimentoEncomendaById(idRecebimentoEncomenda);

        if (!recebimentoEncomendaExist) {
            throw new AppError("RecebimentoEncomenda inexistente!");
        }

        const recebimentoEncomendaUpdated = await this.recebimentoEncomendaRepository.updateRecebimentoEncomenda(idRecebimentoEncomenda, {
            obsRecEncomenda,
            idEncomenda
        });
        return recebimentoEncomendaUpdated;
    }
}

export { UpdateRecebimentoEncomendaByIdUseCase };