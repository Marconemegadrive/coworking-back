import { inject, injectable } from "tsyringe";
import { ClienteCpfRepository } from "../../repositories/implementations/ClienteCpfRepository";
import { ClienteCpf } from "../../entities/ClienteCpf";
import { ICreateClienteCpfDTO } from "../../repositories/dtos/ICreateClienteCpfDTO";
import { AppError } from "../../../../shared/errors/AppError";

@injectable()
class CreateClienteCpfUseCase {

    constructor(
        @inject("ClienteCpfRepository")
        private clienteCpfRepository: ClienteCpfRepository
    ) {}

    async handle({ cpf, nome, dataNasc, Cliente_idCliente, usuario_idUsuario }: ICreateClienteCpfDTO): Promise<ClienteCpf> {
        
        const clienteCpfFound = await this.clienteCpfRepository.findByCpf(cpf);

        if (clienteCpfFound) {
            throw new AppError("Cliente já cadastrado com esse CPF!"); 
        }

        const clienteCpfCreated = await this.clienteCpfRepository.create({
            cpf, 
            nome, 
            dataNasc, 
            Cliente_idCliente, 
            usuario_idUsuario
        });

        return clienteCpfCreated;
    }
}

export { CreateClienteCpfUseCase };