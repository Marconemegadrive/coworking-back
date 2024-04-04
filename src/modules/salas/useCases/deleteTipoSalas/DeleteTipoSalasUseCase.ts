import { inject, injectable } from "tsyringe";
import { ITipoSalasRepository } from "../../repositories/interfaces/ITipoSalasRepository";
import { TipoSalas } from "../../entities/TipoSalas";
import { AppError } from "../../../../shared/errors/AppError";


@injectable()
class DeleteTipoSalasUseCase {
    static execute(idTipoSalas: number) {
        throw new Error("Method not implemented.");
    }
        
   
    constructor(
        @inject("TipoSalasRepository")
        private tipoSalasRepository: ITipoSalasRepository
    ){}

    async execute(idTipoSalas: number): Promise<TipoSalas> {

        const tipoSalasFound = await this.tipoSalasRepository.findById(idTipoSalas);

        if (!tipoSalasFound) {
            throw new AppError("Tipo Sala não existe");
        }

        const tipoSalasDeleted = await this.tipoSalasRepository.delete(idTipoSalas);

        return tipoSalasDeleted;
    }
}

export { DeleteTipoSalasUseCase};