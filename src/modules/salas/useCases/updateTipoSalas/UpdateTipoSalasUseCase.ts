import { inject, injectable } from "tsyringe";
import { ITipoSalasRepository } from "../../repositories/interfaces/ITipoSalasRepository";
import { TipoSalas } from "../../entities/TipoSalas";
import { AppError } from "../../../../shared/errors/AppError";

@injectable()
class UpdateTipoSalasUseCase {

    constructor(
        @inject("TipoSalasRepository")
        private tipoSalasRepository: ITipoSalasRepository
    ){}

    async execute(idTipoSalas: number, tipo: string): Promise<TipoSalas> {

        const idTipoSalasFound = await this.tipoSalasRepository.findById(idTipoSalas);

        if (!idTipoSalasFound) {
            throw new AppError("Tipo Salas não existe");
        }

        const tipoSalasFound = await this.tipoSalasRepository.update(idTipoSalas, tipo);

        return tipoSalasFound;
    }

}

export {UpdateTipoSalasUseCase};