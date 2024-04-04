import { inject, injectable } from "tsyringe";
import { IEnderecoFiscalRepository } from "../../repositories/interfaces/IEnderecoFiscalRepository";
import { EnderecoFiscal} from "../../entities/EnderecoFiscal";
import { AppError } from "../../../../shared/errors/AppError";

@injectable()
class DeleteEnderecoFiscalUseCase {

    constructor(
        @inject("EnderecoFiscalRepository")
        private enderecoFiscalRepository: IEnderecoFiscalRepository
    ) {}

    async execute(idEndFiscal: number): Promise<EnderecoFiscal> {
        const enderecoFiscalExists = await this.enderecoFiscalRepository.findEnderecoFiscalById(idEndFiscal);

        if(!enderecoFiscalExists) {
            throw new AppError("EnderecoFiscal inexistente!");
        }

        const enderecoFiscalDeletado = await this.enderecoFiscalRepository.deleteEnderecoFiscal(idEndFiscal);

        return enderecoFiscalDeletado;
    }
}

export { DeleteEnderecoFiscalUseCase };