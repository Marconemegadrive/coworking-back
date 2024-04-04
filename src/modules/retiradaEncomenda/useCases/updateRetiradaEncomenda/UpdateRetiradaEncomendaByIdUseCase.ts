import { inject, injectable } from "tsyringe";
import { IRetiradaEncomendaRepository } from "../../repositories/interfaces/IRetiradaEncomendaRepository";
import { RetiradaEncomenda } from "../../entities/RetiradaEncomenda";
import { AppError } from "../../../../shared/errors/AppError";
import { IUpdateRetiradaEncomendaDTO } from "../../repositories/dtos/IUpdateRetiradaEncomendaDTO";

@injectable()
export class UpdateRetiradaEncomendaByIdUseCase {

    constructor(
        @inject("RetiradaEncomendaRepository")
        private retiradaEncomendaRepository: IRetiradaEncomendaRepository
    ) { }

    async execute(idRetiradaEncomenda: number, { obsRetEncomenda, idEncomenda }: IUpdateRetiradaEncomendaDTO): Promise<RetiradaEncomenda> {

        const retiradaEncomendaExist = await this.retiradaEncomendaRepository.findRetiradaEncomendaById(idRetiradaEncomenda);

        if (!retiradaEncomendaExist) {
            throw new AppError("Retirada Encomenda inexistente!");
        }

        const retiradaEncomendaUpdated = await this.retiradaEncomendaRepository.updateRetiradaEncomenda(idRetiradaEncomenda, {
            obsRetEncomenda,
            idEncomenda
        });
        return retiradaEncomendaUpdated;
    }
}

