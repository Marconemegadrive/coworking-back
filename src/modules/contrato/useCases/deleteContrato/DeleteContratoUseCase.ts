import { inject, injectable } from "tsyringe";
import { Contrato } from "../../entities/Contrato";
import { IContratoRepository } from "../../repositories/interfaces/IContratoRepository";
import { AppError } from "../../../../shared/errors/AppError";

@injectable()
class DeleteContratoUseCase {

    constructor(
        @inject("ContratoRepository")
        private contratoRepository: IContratoRepository
    ) {}

    
    async execute(idContrato: number): Promise<Contrato> {

        const contratoFound = await this.contratoRepository.findById(idContrato);

        if(!contratoFound) {
            throw new AppError("Contrato inexistente.");
        }

        const contratoDeleted = await this.contratoRepository.delete(idContrato);

        return contratoFound;

    }
}

export { DeleteContratoUseCase };