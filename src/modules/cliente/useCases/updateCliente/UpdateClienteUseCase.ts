import { inject, injectable } from "tsyringe";
import { IClienteRepository } from "../../repositories/interfaces/IClienteRepository";
import { Cliente } from "../../entities/Cliente";
import { AppError } from "../../../../shared/errors/AppError";

@injectable()
class UpdateClienteUseCase {

    constructor(
        @inject("ClienteRepository")
        private clienteRepository: IClienteRepository
    ) {}

    async execute(idCliente: number, contrato: string): Promise<Cliente> {

        const clienteFound = await this.clienteRepository.findById(idCliente);

        if (!clienteFound) {
            throw new AppError("Cliente Inexistente!");
        }

        const clienteUpdated = await this.clienteRepository.update(idCliente, contrato);

        return clienteUpdated;
    }
}

export { UpdateClienteUseCase };