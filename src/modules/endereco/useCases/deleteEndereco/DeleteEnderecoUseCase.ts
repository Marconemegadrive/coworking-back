import { inject, injectable } from "tsyringe";
import { IEnderecoRepository } from "../../repositories/interface/IEnderecoRepository";
import { Endereco } from "../../entities/Endereco";
import { AppError } from "../../../../shared/errors/AppError";

@injectable()
class DeleteEnderecoUseCase {

    constructor(
        @inject("EnderecoRepository")
        private enderecoRepository: IEnderecoRepository
    ) {}

    async execute(cliente_idCliente: number): Promise<Endereco> {

        const enderecoFound = await this.enderecoRepository.findByIdCliente(cliente_idCliente);

        if (!enderecoFound) {
            throw new AppError("Endereco Inexistênte!");
        }

        const enderecoDeleted = await this.enderecoRepository.delete(cliente_idCliente);

        return enderecoDeleted;
    }
}

export { DeleteEnderecoUseCase };