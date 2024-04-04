import { inject, injectable } from "tsyringe";
import { IClienteRepository } from "../../repositories/interfaces/IClienteRepository";
import { Cliente } from "../../entities/Cliente";

@injectable()
class ListClientesUseCase {

    constructor(
        @inject("ClienteRepository")
        private clienteRepository: IClienteRepository
    ) {}

    async execute(): Promise<Cliente[]> {

        const clientesAll = await this.clienteRepository.list();

        return clientesAll;
    }
}

export { ListClientesUseCase }