import { inject, injectable } from "tsyringe";
import { ISalasRepository } from "../../repositories/interfaces/ISalasRepository";
import { AppError } from "../../../../shared/errors/AppError";
import { Salas } from "../../entities/Salas";

@injectable()
class DeleteSalasUseCase {

    constructor(
        @inject("SalasRepository")
        private salasRepository: ISalasRepository
    ){}

    async execute (idSala: number): Promise<Salas> {

        const salasDelete = await this.salasRepository.findById(idSala);
        
        if(!salasDelete) {
            throw new AppError("Sala inexistente");
        }

        const salasDel = await this.salasRepository.delete(idSala);

        return salasDel;
    }
}

export { DeleteSalasUseCase };