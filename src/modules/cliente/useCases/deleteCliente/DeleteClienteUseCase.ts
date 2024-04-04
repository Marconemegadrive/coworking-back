import { inject, injectable } from "tsyringe";
import { IClienteRepository } from "../../repositories/interfaces/IClienteRepository";
import { AppError } from "../../../../shared/errors/AppError";
import { Cliente } from "../../entities/Cliente";

@injectable()
class DeleteClienteUseCase {

    constructor(
        @inject("ClienteRepository")
        private clienteRepository: IClienteRepository
    ) {}

    async execute(idCliente: number): Promise<Cliente> {

        const clienteFound = await this.clienteRepository.findById(idCliente);

        if (!clienteFound) {
            throw new AppError("Cliente inexistente");
        }

        const clienteDeleted = await this.clienteRepository.delete(idCliente);

        return clienteDeleted;
    }
}

export { DeleteClienteUseCase }