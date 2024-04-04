import { inject, injectable } from "tsyringe";
import { IStatusSalasRepository } from "../../repositories/interfaces/IStatusSalasRepository";
import { StatusSalas } from "../../entities/StatusSalas";
import { AppError } from "../../../../shared/errors/AppError";


@injectable()
class UpdateStatusSalasUseCase {

    constructor(
        @inject("StatusSalasRepository")
        private statusSalasRepository: IStatusSalasRepository
    ){}

    async execute(idStatusSalas: number, statusSalas: string): Promise<StatusSalas> {

        const idStatusSalasFound = await this.statusSalasRepository.findById(idStatusSalas);
        
        if(!idStatusSalasFound) {
            throw new AppError("O ID da sala de status não foi encontrado");
        }

        const updateStatusSalas = await this.statusSalasRepository.update(idStatusSalas, statusSalas);

        return updateStatusSalas;
    }
}

export { UpdateStatusSalasUseCase};