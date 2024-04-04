import { inject, injectable } from "tsyringe";
import { IEnderecoFiscalRepository } from "../../repositories/interfaces/IEnderecoFiscalRepository";
import {EnderecoFiscal } from "../../entities/EnderecoFiscal";
import { AppError } from "../../../../shared/errors/AppError";

@injectable()
class FindEnderecoFiscalByIdUseCase {

    constructor(
        @inject("EnderecoFiscal Repository")
        private EnderecoFiscalRepository: IEnderecoFiscalRepository
    ) {}

    async execute(idEndFiscal: number): Promise<EnderecoFiscal> {
        
        const enderecoFiscal = await this.EnderecoFiscalRepository.findEnderecoFiscalById(idEndFiscal);

        if(!enderecoFiscal) {
            throw new AppError("EnderecoFiscal inexistente!");
        }
        return enderecoFiscal;
    }
}

export { FindEnderecoFiscalByIdUseCase };