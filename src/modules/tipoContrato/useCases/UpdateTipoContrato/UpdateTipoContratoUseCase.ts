import { inject, injectable } from "tsyringe";
import { TipoContrato } from "../../entities/TipoContrato";
import { ITipoContratoRepository } from "../../repositories/interfaces/ITipoContratoRepository";
import { IUpdateTipoContratoDTO } from "../../repositories/dtos/IUpdateTipoContratoDTO";
import { AppError } from "../../../../shared/errors/AppError";

@injectable()
class UpdateTipoContratoUseCase {

    constructor(
        @inject("TipoContratoRepository")
        private tipoContratoRepository: ITipoContratoRepository
    ) {}

    async execute(idTipoContrato: number, { descricao }: IUpdateTipoContratoDTO): Promise<TipoContrato> {
        
        const tipoContratoExists = await this.tipoContratoRepository.findById(idTipoContrato);

        if(!tipoContratoExists) {
            throw new AppError("Tipo de Contrato inexistente");
        }

        const tipoContratoUpdated = await this.tipoContratoRepository.update(idTipoContrato, 
            { 
                descricao
            });
            
            return tipoContratoUpdated;
    }
}

export { UpdateTipoContratoUseCase }