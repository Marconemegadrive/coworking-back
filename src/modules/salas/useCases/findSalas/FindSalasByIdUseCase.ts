import { inject, injectable } from "tsyringe";
import { ISalasRepository } from "../../repositories/interfaces/ISalasRepository";
import { Salas } from "../../entities/Salas";
import { AppError } from "../../../../shared/errors/AppError";

@injectable()
class FindSalasByIdUseCase {

    constructor(
        @inject("SalasRepository")
        private salasRepository: ISalasRepository
    ){}

    async execute(idSala: number): Promise<Salas> {
        const salaFound = await this.salasRepository.findById(idSala);

        if(!salaFound) {
            throw new AppError("Sala não encontradaa");
    }

        return salaFound;
    }
}

export { FindSalasByIdUseCase };