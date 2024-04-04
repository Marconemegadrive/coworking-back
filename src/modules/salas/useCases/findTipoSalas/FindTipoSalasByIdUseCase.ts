import { inject, injectable } from "tsyringe";
import { ITipoSalasRepository } from "../../repositories/interfaces/ITipoSalasRepository";
import { TipoSalas } from "../../entities/TipoSalas";
import { AppError } from "../../../../shared/errors/AppError";
@injectable()
    class FindTipoSalasByIdUseCase {
    
        constructor(
            @inject("tipoSalasRepository")
            private tipoSalasRepository: ITipoSalasRepository
        ){}

        async execute(idTipoSalas: number): Promise<TipoSalas> {

            const tipoSalasFound = await this.tipoSalasRepository.findById(idTipoSalas);

            if (!tipoSalasFound) {
                throw new AppError("Tipo Salas inexistente");
            }

            return tipoSalasFound;
        }
    }

    export { FindTipoSalasByIdUseCase};