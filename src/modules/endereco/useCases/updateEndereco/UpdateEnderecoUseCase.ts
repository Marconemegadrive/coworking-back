import { inject, injectable } from "tsyringe";
import { IEnderecoRepository } from "../../repositories/interface/IEnderecoRepository";
import { IUpdateEnderecoDTO } from "../../repositories/dtos/IUpdateEnderecoDTO";
import { Endereco } from "../../entities/Endereco";
import { AppError } from "../../../../shared/errors/AppError";

@injectable()
class UpdateEnderecoUseCase {

    constructor(
        @inject("EnderecoRepository")
        private enderecoRepository: IEnderecoRepository
    ) {}

    async execute(cliente_idCliente: number, { uf, cep, cidade, bairro, rua, numero, complemento, obs }: IUpdateEnderecoDTO): Promise<Endereco> {

        const enderecoFound = await this.enderecoRepository.findByIdCliente(cliente_idCliente);

        if (!enderecoFound) {
            throw new AppError("Endereço Inexistente!");
        }

        const enderecoUpdated = await this.enderecoRepository.update(cliente_idCliente, {
            uf, 
            cep, 
            cidade, 
            bairro, 
            rua, 
            numero, 
            complemento, 
            obs 
        });

        return enderecoUpdated;
    }
}

export { UpdateEnderecoUseCase };