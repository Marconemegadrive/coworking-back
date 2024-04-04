import { inject, injectable } from "tsyringe";
import { IClientePjRepository } from "../../repositories/interfaces/IClientePjRepository";
import { ClientePj } from "../../entities/ClientePj";

@injectable()
class ListClientesPjUseCase {

    constructor(
        @inject("ClientePjRepository")
        private clientePjRepository: IClientePjRepository
    ) {}

    async execute(): Promise<ClientePj[]> {

        const clientesPjAll = await this.clientePjRepository.list();

        return clientesPjAll;
    }
}

export { ListClientesPjUseCase };