import { inject, injectable } from "tsyringe";
import { IEncomendaRepository } from "../../repositories/interfaces/IEncomendaRepository";
import {Encomenda } from "../../entities/Encomenda";
import { AppError } from "../../../../shared/errors/AppError";

@injectable()
export class FindEncomendaByIdUseCase {

    constructor(
        @inject("EncomendaRepository")
        private encomendaRepository: IEncomendaRepository
    ) {}

    async execute(idEncomenda: number): Promise<Encomenda> {
        
        const encomenda = await this.encomendaRepository.findEncomendaById(idEncomenda);

        if(!encomenda) {
            throw new AppError("Encomenda inexistente!");
        }
        return encomenda;
    }
}

