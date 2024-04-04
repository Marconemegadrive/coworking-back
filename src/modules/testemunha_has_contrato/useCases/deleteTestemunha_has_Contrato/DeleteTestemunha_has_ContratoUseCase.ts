import { inject, injectable } from "tsyringe";
import { Testemunha_has_Contrato } from "../../entities/Testemunha_has_Contrato";
import { ITestemunha_has_ContratoRepository } from "../../repositories/interfaces/ITestemunha_has_ContratoRepository";
import { AppError } from "../../../../shared/errors/AppError";

@injectable() 
class DeleteTestemunha_has_ContratoUseCase {

    constructor(
        @inject("Testemunha_has_ContratoRepository")
        private testemunha_has_ContratoRepository: ITestemunha_has_ContratoRepository
    ) {}
    
    async execute(Testemunha_idTestemunha: number, Contrato_idContrato: number): Promise<void> {

        const entryToDelete = await this.testemunha_has_ContratoRepository.delete(Testemunha_idTestemunha, Contrato_idContrato);

        if (!entryToDelete) {
            throw new AppError("Não foi encontrada uma entrada com os IDs fornecidos.");
        }
    }
}

export { DeleteTestemunha_has_ContratoUseCase };