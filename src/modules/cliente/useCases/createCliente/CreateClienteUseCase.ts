import { inject, injectable } from "tsyringe";
import { IClienteRepository } from "../../repositories/interfaces/IClienteRepository";
import { ICreateClienteDTO } from "../../repositories/dtos/ICreateClienteDTO";
import { Cliente } from "../../entities/Cliente";

@injectable()
class CreateClienteUseCase {

    constructor(
        @inject("ClienteRepository")
        private clienteRepository: IClienteRepository
    ) {}

    async execute({ contrato, StatusCliente_idStatusCliente }: ICreateClienteDTO): Promise<Cliente> {

        const clienteCreated = await this.clienteRepository.create({
            contrato,
            StatusCliente_idStatusCliente,
        });

        return clienteCreated;
    }
}

export { CreateClienteUseCase };