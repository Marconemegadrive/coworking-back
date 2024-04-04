import { inject, injectable } from "tsyringe";
import { IClienteCpfRepository } from "../../repositories/interfaces/IClienteCpfRepository";
import { ClienteCpf } from "../../entities/ClienteCpf";
import { AppError } from "../../../../shared/errors/AppError";

@injectable()
class FindClienteCpfByCpfUseCase {

    constructor(
        @inject("ClienteCpfRepository")
        private clienteCpfRepository: IClienteCpfRepository
    ) {}

    async execute(cpf: string): Promise<ClienteCpf> {

        const clienteCpfFound = await this.clienteCpfRepository.findByCpf(cpf);

        if (!clienteCpfFound) {
            throw new AppError("Cliente CPF inexistênte!");
        }

        return clienteCpfFound;
    }
}

export { FindClienteCpfByCpfUseCase };