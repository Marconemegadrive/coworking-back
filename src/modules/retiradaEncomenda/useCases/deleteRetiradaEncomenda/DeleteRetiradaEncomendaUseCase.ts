import { inject, injectable } from "tsyringe";
import { IRetiradaEncomendaRepository } from "../../repositories/interfaces/IRetiradaEncomendaRepository";
import { RetiradaEncomenda } from "../../entities/RetiradaEncomenda";
import { AppError } from "../../../../shared/errors/AppError";

@injectable()
export class DeleteRetiradaEncomendaUseCase {

    constructor(
        @inject("Retiradaepository")
        private retiradaEncomendaRepository: IRetiradaEncomendaRepository
    ) {}

    async execute(idRetiradaEncomenda: number): Promise<RetiradaEncomenda> {
        const retiradaEncomendaExists = await this.retiradaEncomendaRepository.findRetiradaEncomendaById(idRetiradaEncomenda);

        if(!retiradaEncomendaExists) {
            throw new AppError("RetiradaEncomenda inexistente!");
        }

        const retiradaEncomendaDeletada = await this.retiradaEncomendaRepository.deleteRetiradaEncomenda(idRetiradaEncomenda);

        return retiradaEncomendaDeletada;
    }
}

