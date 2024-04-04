import { inject, injectable } from "tsyringe";
import { IStatusSalasRepository } from "../../repositories/interfaces/IStatusSalasRepository";
import { StatusSalas } from "../../entities/StatusSalas";

@injectable()
class ListStatusSalasUseCase{
    
    constructor(
        
        @inject("StatusSalasRepository")
        private StatusSalasRepository: IStatusSalasRepository
    ) {}

    async execute(): Promise<StatusSalas[]> {

        const statusSalasAll = await this.StatusSalasRepository.list();

        return statusSalasAll;
    }
}

export { ListStatusSalasUseCase};