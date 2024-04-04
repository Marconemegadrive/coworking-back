import { inject, injectable } from "tsyringe";
import { IClienteRepository } from "../../repositories/interfaces/IClienteRepository";
import { Cliente } from "../../entities/Cliente";
import { AppError } from "../../../../shared/errors/AppError";

@injectable()
class FindClienteByIdUseCase {

    constructor(
        @inject("ClienteRepository")
        private clienteRepository: IClienteRepository
    ) {}

    async execute(idCliente: number): Promise<Cliente> {


        const clienteFound = await this.clienteRepository.findById(idCliente);

        if (!clienteFound) {
            throw new AppError("Cliente inexistente");
        }

        return clienteFound;
    }
}

export { FindClienteByIdUseCase };