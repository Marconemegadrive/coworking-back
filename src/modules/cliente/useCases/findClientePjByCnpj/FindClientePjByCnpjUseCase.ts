import { inject, injectable } from "tsyringe";
import { IClientePjRepository } from "../../repositories/interfaces/IClientePjRepository";
import { ClientePj } from "../../entities/ClientePj";
import { AppError } from "../../../../shared/errors/AppError";

@injectable()
class FindClientePjByCnpjUseCase {

    constructor(
        @inject("ClientePjRepository")
        private clientePjRepository: IClientePjRepository
    ) {}

    async execute(cnpj: string): Promise<ClientePj> {

        const clientePjFound = await this.clientePjRepository.findByCnpj(cnpj);

        if (!clientePjFound) {
            throw new AppError("Cliente PJ Inexistente!");
        }

        return clientePjFound;
    }
}

export { FindClientePjByCnpjUseCase };