import { inject, injectable } from "tsyringe";
import { EnderecoFiscal } from "../../entities/EnderecoFiscal";
import { ICreateEnderecoFiscalDTO } from "../../repositories/dtos/ICreateEnderecoFiscalDTO";
import { IEnderecoFiscalRepository } from "../../repositories/interfaces/IEnderecoFiscalRepository";
import { AppError } from "../../../../shared/errors/AppError";


class CreateEnderecoFiscalUseCase {

    constructor(
        @inject("EnderecoFiscalRepository")
        private enderecoFiscalRepository: IEnderecoFiscalRepository
    ) {}

    async execute( { statusEndFiscal, cliente_idCliente}: ICreateEnderecoFiscalDTO): Promise<EnderecoFiscal> {

        const enderecoFiscalExists = await this.enderecoFiscalRepository.findEnderecoFiscalByIdCliente(cliente_idCliente);
        
        if(enderecoFiscalExists) {
            throw new AppError("EnderecoFiscal já existente!");  
        }

        const enderecoFiscal = await this.enderecoFiscalRepository.create({
            statusEndFiscal,
            cliente_idCliente
        });

        return enderecoFiscal;
    }
}

export { CreateEnderecoFiscalUseCase }