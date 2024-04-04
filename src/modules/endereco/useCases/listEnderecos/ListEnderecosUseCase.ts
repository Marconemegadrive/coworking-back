import { inject, injectable } from "tsyringe";
import { IEnderecoRepository } from "../../repositories/interface/IEnderecoRepository";
import { Endereco } from "../../entities/Endereco";

@injectable()
class ListEnderecosUseCase {

    constructor(
        @inject("EnderecoRepository")
        private enderecoRepository: IEnderecoRepository
    ) {}

    async execute(): Promise<Endereco[]> {

        const enderecosAll = await this.enderecoRepository.list();

        return enderecosAll;
    }
}

export { ListEnderecosUseCase };