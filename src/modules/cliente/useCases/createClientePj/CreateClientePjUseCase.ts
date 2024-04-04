import { inject, injectable } from "tsyringe";
import { IClientePjRepository } from "../../repositories/interfaces/IClientePjRepository";
import { ICreateClientePjDTO } from "../../repositories/dtos/ICreateClientePjDTO";
import { ClientePj } from "../../entities/ClientePj";
import { AppError } from "../../../../shared/errors/AppError";

@injectable()
class CreateClientePjUseCase {

    constructor(
        @inject("ClientePjRepository")
        private clientePjRepository: IClientePjRepository
    ) {}

    async execute({ cnpj, razaoSocial, nomeFantasia, dataFundacao, Cliente_idCliente }: ICreateClientePjDTO): Promise<ClientePj> {

        const clientePjFound = await this.clientePjRepository.findByCnpj(cnpj);

        if(clientePjFound) {
            throw new AppError("Já existe um Cliente cadastrado com esse CNPJ");
        }

        const clientePjCreated = await this.clientePjRepository.create({
            cnpj, 
            razaoSocial, 
            nomeFantasia, 
            dataFundacao, 
            Cliente_idCliente,
        });

        return clientePjCreated;
    }
}

export { CreateClientePjUseCase };