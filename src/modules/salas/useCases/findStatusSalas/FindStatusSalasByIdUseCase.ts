import { inject, injectable } from "tsyringe";
import { StatusSalasRepository } from "../../repositories/implementation/StatusSalasRepository";
import { StatusSalas } from "../../entities/StatusSalas";
import { AppError } from "../../../../shared/errors/AppError";

@injectable()
    class FindStatusSalasByIdUseCase {

        constructor(
            @inject("statusSalasRepository")
            private statusSalasRepository: StatusSalasRepository
        ){}

        async execute(idStatusSals: number): Promise<StatusSalas> {

            const statusSalasFound = await this.statusSalasRepository.findById(idStatusSals);

            if (!statusSalasFound) {
                throw new AppError("Status Salas inexistente");
                
            }

            return statusSalasFound;
        }
    }

    export { FindStatusSalasByIdUseCase};