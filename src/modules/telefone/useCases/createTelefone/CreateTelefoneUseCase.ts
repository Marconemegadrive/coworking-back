import { inject, injectable } from "tsyringe";
import { ITelefoneRepository } from "../../repositories/interfaces/ITelefoneRepository";
import { ICreateTelefoneDTO } from "../../repositories/dtos/ICreateTelefoneDTO";
import { Telefone } from "../../entities/Telefone";

@injectable()
class CreateTelefoneUseCase {

    constructor(
        @inject("TelefoneRepository")
        private telefoneRepository: ITelefoneRepository
    ) {}

    async execute({ telefone, Cliente_idCliente, Funcionario_cpf1 }: ICreateTelefoneDTO): Promise<Telefone> {

        const telefoneCreated = await this.telefoneRepository.create({
            telefone,
            Cliente_idCliente,
            Funcionario_cpf1
        });

        return telefoneCreated;
    } 
}

export { CreateTelefoneUseCase };