import { inject, injectable } from "tsyringe";
import { IStatusClienteRepository } from "../../repositories/interfaces/IStatusClienteRepository";
import { StatusCliente } from "../../entities/StatusCliente";
import { AppError } from "../../../../shared/errors/AppError";

@injectable()
class FindStatusClienteByIdUseCase {

    constructor(
        @inject("StatusClienteRepository")
        private statusClienteRepository: IStatusClienteRepository
    ) {}

    async execute(idStatus: number): Promise<StatusCliente> {

        const statusClienteFound = await this.statusClienteRepository.findById(idStatus);

        if (!statusClienteFound) {
            throw new AppError("Status do Cliente Inexistente!");
        }

        return statusClienteFound;
    }
}

export { FindStatusClienteByIdUseCase };