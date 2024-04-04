import { inject, injectable } from "tsyringe";
import { ITipoContratoRepository } from "../../repositories/interfaces/ITipoContratoRepository";
import { TipoContrato } from "../../entities/TipoContrato";
import { AppError } from "../../../../shared/errors/AppError";

@injectable()
class DeleteTipoContratoUseCase {

    constructor(
        @inject("TipoContratoRepository")
        private tipoContratoRepository: ITipoContratoRepository
    ) {}
    
    async execute(idTipoContrato: number): Promise<TipoContrato> {

        const idTipoContratoFound = await this.tipoContratoRepository.findById(idTipoContrato);

        if(!idTipoContratoFound) {
            throw new AppError("ID de Contrato inexistente");
        }

        const idTipoContratoDeleted = await this.tipoContratoRepository.delete(idTipoContrato);
        
        return idTipoContratoDeleted;
    }
}
export {DeleteTipoContratoUseCase }