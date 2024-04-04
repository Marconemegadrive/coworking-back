import { inject, injectable } from "tsyringe";
import { IEncomendaRepository } from "../../repositories/interfaces/IEncomendaRepository";
import { Encomenda } from "../../entities/Encomenda";
import { AppError } from "../../../../shared/errors/AppError";

@injectable()
export class DeleteEncomendaUseCase {

    constructor(
        @inject("EncomendaRepository")
        private encomendaRepository: IEncomendaRepository
    ) {}

    async execute(idEncomenda: number): Promise<Encomenda> {
        const encomendaExists = await this.encomendaRepository.findEncomendaById(idEncomenda);

        if(!encomendaExists) {
            throw new AppError("Encomenda inexistente!");
        }

        const encomendaDeletada = await this.encomendaRepository.deleteEncomenda(idEncomenda);

        return encomendaDeletada;
    }
}

