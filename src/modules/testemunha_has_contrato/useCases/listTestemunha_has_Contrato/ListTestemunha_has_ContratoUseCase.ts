import { inject, injectable } from "tsyringe";
import { ITestemunha_has_ContratoRepository } from "../../repositories/interfaces/ITestemunha_has_ContratoRepository";
import { Testemunha_has_Contrato } from "../../entities/Testemunha_has_Contrato";

@injectable()
class ListTestemunha_has_ContratoUseCase {

    constructor(
        @inject("Testemunha_has_ContratoRepository")
        private testemunha_has_ContratoRepository: ITestemunha_has_ContratoRepository
    ) {}

    async execute(): Promise<Testemunha_has_Contrato[]> {
        
        const testemunhasContratosAll = await this.testemunha_has_ContratoRepository.list();

        return testemunhasContratosAll;
    }
}

export { ListTestemunha_has_ContratoUseCase };