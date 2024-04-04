import { inject, injectable } from "tsyringe";
import { IClienteCpfRepository } from "../../repositories/interfaces/IClienteCpfRepository";
import { ClienteCpf } from "../../entities/ClienteCpf";

@injectable()
class ListClientesCpfUseCase {

    constructor(
        @inject("ClienteCpfRepository")
        private clienteCpfRepository: IClienteCpfRepository
    ) {}

    async execute(): Promise<ClienteCpf[]> {

        const clientesCpfAll = await this.clienteCpfRepository.list();

        return clientesCpfAll;
    }
}

export { ListClientesCpfUseCase };