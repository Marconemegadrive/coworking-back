import { inject, injectable } from "tsyringe";
import { IStatusClienteRepository } from "../../repositories/interfaces/IStatusClienteRepository";
import { StatusCliente } from "../../entities/StatusCliente";

@injectable()
class CreateStatusClienteUseCase {

    constructor(
        @inject("StatusClienteRepository")
        private statusClienteRepository: IStatusClienteRepository
    ) {}

    async execute(tipo: string): Promise<StatusCliente> {

        const statusClienteCreated = await this.statusClienteRepository.create(tipo);

        return statusClienteCreated;
    }
}

export { CreateStatusClienteUseCase };