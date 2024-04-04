import { inject, injectable } from "tsyringe";
import { IStatusClienteRepository } from "../../repositories/interfaces/IStatusClienteRepository";
import { StatusCliente } from "../../entities/StatusCliente";

@injectable()
class ListStatusClienteUseCase {

    constructor(
        @inject("StatusClienteRepository")
        private statusClienteRepository: IStatusClienteRepository
    ) {}

    async execute(): Promise<StatusCliente[]> {

        const statusClienteAll = await this.statusClienteRepository.list();

        return statusClienteAll;
    }
}

export { ListStatusClienteUseCase };