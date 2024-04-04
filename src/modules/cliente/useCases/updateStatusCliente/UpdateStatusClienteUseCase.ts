import { inject, injectable } from "tsyringe";
import { IStatusClienteRepository } from "../../repositories/interfaces/IStatusClienteRepository";
import { StatusCliente } from "../../entities/StatusCliente";
import { AppError } from "../../../../shared/errors/AppError";

@injectable()
class UpdateStatusClienteUseCase {

    constructor(
        @inject("StatusClienteRepository")
        private statusClienteRepository: IStatusClienteRepository
    ) {}

    async execute(idStatus: number, tipo: string): Promise<StatusCliente> {

        const statusClienteFound = await this.statusClienteRepository.findById(idStatus);

        if (!statusClienteFound) {
            throw new AppError("Status do Cliente Inexistente!");
        }

        const statusClienteUpdated = await this.statusClienteRepository.update(idStatus, tipo);

        return statusClienteUpdated;
    }
}

export { UpdateStatusClienteUseCase }