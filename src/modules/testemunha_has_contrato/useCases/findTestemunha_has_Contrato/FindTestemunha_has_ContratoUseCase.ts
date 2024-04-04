import { inject, injectable } from "tsyringe";
import { ITestemunha_has_ContratoRepository } from "../../repositories/interfaces/ITestemunha_has_ContratoRepository";
import { Testemunha_has_Contrato } from "../../entities/Testemunha_has_Contrato";
import { AppError } from "../../../../shared/errors/AppError";

@injectable()
class FindTestemunha_has_ContratoUseCase {

    constructor(
        @inject("Testemunha_has_ContratoRepository")
        private testemunha_has_ContratoRepository: ITestemunha_has_ContratoRepository
    ) {}

    async execute(Testemunha_idTestemunha: number): Promise<Testemunha_has_Contrato[]> {

        const testemunha_idTestemunha = await this.testemunha_has_ContratoRepository.findById( Testemunha_idTestemunha );

        if(!testemunha_idTestemunha || testemunha_idTestemunha.length === 0) {
            throw new AppError("Testemunha sem contrato existênte!");
        }

        return testemunha_idTestemunha;
    }
}

export { FindTestemunha_has_ContratoUseCase };