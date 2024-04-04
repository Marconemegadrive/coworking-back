import { inject, injectable } from "tsyringe";
import { StatusSalas } from "../../entities/StatusSalas";
import { AppError } from "../../../../shared/errors/AppError";
import { IStatusSalasRepository } from "../../repositories/interfaces/IStatusSalasRepository";



@injectable()
class DeleteStatusSalasUseCase {
    

    constructor(
        @inject("StatusSalasRepository")
        private statusSalasRepository: IStatusSalasRepository
    ) {}

    async execute(idStatus: number): Promise<StatusSalas> {

        const statusSalasFound = await this.statusSalasRepository.findById(idStatus);

        if (!statusSalasFound) {
            throw new AppError("Status Salas não existe");
        }

        const statusSalasDelete = await this.statusSalasRepository.delete(idStatus);

        return statusSalasDelete;
    }

    
    
}

export { DeleteStatusSalasUseCase};