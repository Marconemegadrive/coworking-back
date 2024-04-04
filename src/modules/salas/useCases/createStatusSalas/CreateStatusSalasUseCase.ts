import { inject, injectable } from "tsyringe";
import { IStatusSalasRepository } from "../../repositories/interfaces/IStatusSalasRepository";
import { StatusSalas } from "../../entities/StatusSalas";
import { ICreateStatusSalasDTO } from "../../repositories/dtos/ICreateStatusSalasDTO";


@injectable()
class CreateStatusSalasUseCase{

    constructor(
        @inject("StatusSalasRepository")
        private StatusSalasRepository: IStatusSalasRepository
    ) {}

    async execute({ idStatusSalas, statusSalas }: ICreateStatusSalasDTO): Promise<StatusSalas> {
        
        const statusSalasCreated = await this.StatusSalasRepository.create({
            idStatusSalas,
            statusSalas
        });

        return statusSalasCreated;

    }
}

export { CreateStatusSalasUseCase};