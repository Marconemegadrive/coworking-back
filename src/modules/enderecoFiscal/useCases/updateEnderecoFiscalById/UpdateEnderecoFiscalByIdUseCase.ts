import { inject, injectable } from "tsyringe";
import { IEnderecoFiscalRepository } from "../../repositories/interfaces/IEnderecoFiscalRepository";
import { EnderecoFiscal } from "../../entities/EnderecoFiscal";
import { AppError } from "../../../../shared/errors/AppError";
import { IUpdateEnderecoFiscalDTO } from "../../repositories/dtos/IUpdateEnderecoFiscalDTO";

@injectable()
class UpdateEnderecoFiscalByIdUseCase {

    constructor(
        @inject("EnderecoFiscalRepository")
        private enderecoFiscalRepository: IEnderecoFiscalRepository
    ) { }
    
    async execute(idEndFiscal: number, { statusEndFiscal, idCliente }: IUpdateEnderecoFiscalDTO): Promise<EnderecoFiscal> {

        const enderecoFiscalExist = await this.enderecoFiscalRepository.findEnderecoFiscalById(idEndFiscal);

        if (!enderecoFiscalExist) {
            throw new AppError("EnderecoFiscal inexistente!");
        }

        const enderecoFiscalUpdated = await this.enderecoFiscalRepository.updateEnderecoFiscal(idEndFiscal, {
            statusEndFiscal,
            idCliente
        });
        return enderecoFiscalUpdated;
    }
}

export { UpdateEnderecoFiscalByIdUseCase };