import { inject, injectable } from "tsyringe";
import { Testemunha_has_Contrato } from "../../entities/Testemunha_has_Contrato"
import { ICreateTestemunha_has_ContratoDTO } from "../../repositories/dtos/ICreateTestemunha_has_ContratoDTO";
import { ITestemunha_has_ContratoRepository } from "../../repositories/interfaces/ITestemunha_has_ContratoRepository";

@injectable()
class CreateTestemunha_has_ContratoUseCase {

    constructor(
        @inject("Testemunha_has_ContratoRepository")
        private testemunha_has_ContratoRepository: ITestemunha_has_ContratoRepository
    ) {}

    async execute({ Testemunha_idTestemunha, Contrato_idContrato }: ICreateTestemunha_has_ContratoDTO): Promise<Testemunha_has_Contrato> {

        const testemunha_has_ContratoCreated = await this.testemunha_has_ContratoRepository.create({
            Testemunha_idTestemunha,
            Contrato_idContrato
        });

        return testemunha_has_ContratoCreated;
    }
}

export { CreateTestemunha_has_ContratoUseCase };
