import { inject, injectable } from "tsyringe";
import { IEnderecoRepository } from "../../repositories/interface/IEnderecoRepository";
import { ICreateEnderecoDTO } from "../../repositories/dtos/ICreateEnderecoDTO";
import { Endereco } from "../../entities/Endereco";

@injectable()
class CreateEnderecoUseCase {

    constructor(
        @inject("EnderecoRepository")
        private enderecoRepository: IEnderecoRepository
    ) {}

    async execute({ uf, cep, cidade, bairro, complemento, numero, rua, obs, cliente_idCliente }: ICreateEnderecoDTO): Promise<Endereco> {

        const enderecoCreated = await this.enderecoRepository.create({
            uf, 
            cep, 
            cidade, 
            bairro, 
            complemento, 
            numero, 
            rua, 
            obs, 
            cliente_idCliente
        });

        return enderecoCreated;
    }
}

export { CreateEnderecoUseCase };