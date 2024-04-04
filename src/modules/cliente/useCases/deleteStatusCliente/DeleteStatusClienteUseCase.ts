import { inject, injectable } from "tsyringe";
import { IStatusClienteRepository } from "../../repositories/interfaces/IStatusClienteRepository";
import { StatusCliente } from "../../entities/StatusCliente";
import { AppError } from "../../../../shared/errors/AppError";

@injectable()
class DeleteStatusClienteUseCase {

    constructor(
        @inject("StatusClienteRepository")
        private statusClienteRepository: IStatusClienteRepository
    ) {}

    async execute(idStatus: number): Promise<StatusCliente> {

        const statusClienteFound = await this.statusClienteRepository.findById(idStatus);

        if (!statusClienteFound) {
            throw new AppError("Status do Cliente Inexistente!");
        }

        const statusClienteDeleted = await this.statusClienteRepository.delete(idStatus);

        return statusClienteDeleted;
    }
}

export { DeleteStatusClienteUseCase };