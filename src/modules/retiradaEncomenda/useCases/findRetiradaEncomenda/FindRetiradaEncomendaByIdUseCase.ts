import { inject, injectable } from "tsyringe";
import { IRetiradaEncomendaRepository } from "../../repositories/interfaces/IRetiradaEncomendaRepository";
import {RetiradaEncomenda } from "../../entities/RetiradaEncomenda";
import { AppError } from "../../../../shared/errors/AppError";

@injectable()
export class FindRetiradaEncomendaByIdUseCase {

    constructor(
        @inject("RetiradaEncomendaRepository")
        private retiradaEncomendaRepository: IRetiradaEncomendaRepository
    ) {}

    async execute(idRetiradaEncomenda: number): Promise<RetiradaEncomenda> {
        
        const retiradaEncomenda = await this.retiradaEncomendaRepository.findRetiradaEncomendaById(idRetiradaEncomenda);

        if(!retiradaEncomenda) {
            throw new AppError("RetiradaEncomenda inexistente!");
        }
        return retiradaEncomenda;
    }
}

