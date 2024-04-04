import { inject, injectable } from "tsyringe";
import { IEnderecoFiscalRepository } from "../../repositories/interfaces/IEnderecoFiscalRepository";
import { EnderecoFiscal } from "../../entities/EnderecoFiscal";

@injectable()
export class ListEnderecosFiscaisUseCase {

    constructor (
        @inject("EnderecosFiscaisRepository")
        private enderecoFiscalRepository: IEnderecoFiscalRepository
    ) {}

    async execute(): Promise<EnderecoFiscal[]> {
        const enderecoFiscalAll = await this.enderecoFiscalRepository.list();

        return enderecoFiscalAll;
    }
}

