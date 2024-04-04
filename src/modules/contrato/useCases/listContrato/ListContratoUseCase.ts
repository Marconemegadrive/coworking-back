import { inject, injectable } from "tsyringe";
import { IContratoRepository } from "../../repositories/interfaces/IContratoRepository";
import { Contrato } from "../../entities/Contrato";

@injectable()
class ListContratoUseCase {
    
    constructor(
        @inject("ContratoRepository")
        private contratoRepository: IContratoRepository
    ) {}

    async execute(): Promise<Contrato[]> {
        const contratoAll = await this.contratoRepository.list();

        return contratoAll;
    }    
}

export { ListContratoUseCase }