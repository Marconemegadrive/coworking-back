import { inject, injectable } from "tsyringe";
import { IContratoRepository } from "../../repositories/interfaces/IContratoRepository";
import { Contrato } from "../../entities/Contrato";
import { AppError } from "../../../../shared/errors/AppError";
import { IUpdateContratoDTO } from "../../repositories/dtos/UpdateContratoDTO";

@injectable()
class UpdateContratoUseCase {

    constructor(
        @inject("ContratoRepository")
        private contratoRepository: IContratoRepository
    ) { }

    async execute(idContrato: number, { dataInicio, dataFinal, valor, horaSR,
        horaSC, qtdBaias, salaTrab, dataAtualizacao }: IUpdateContratoDTO): Promise<Contrato> {

        const contratoFound = await this.contratoRepository.findById(idContrato);

        if (!contratoFound) {
            throw new AppError("Contrato Inexistente!");
        }

        const contratoUpdate = await this.contratoRepository.update(idContrato, { 
            dataInicio,
            dataFinal, 
            valor, 
            horaSR, 
            horaSC, 
            qtdBaias, 
            salaTrab, 
            dataAtualizacao 
        });

        return contratoUpdate;
    }
}

export { UpdateContratoUseCase };