import { inject, injectable } from "tsyringe";
import { ITipoSalasRepository } from "../../repositories/interfaces/ITipoSalasRepository";
import { ICreateTipoSalasDTO } from "../../repositories/dtos/ICreateTipoSalasDTO";
import { TipoSalas } from "../../entities/TipoSalas";

@injectable()
class CreateTipoSalasUseCase {

    constructor(
        @inject("TipoSalasRepository")
        private tipoSalasRepository: ITipoSalasRepository
    ){}

    async execute({idTipoSalas, tipoSalas}: ICreateTipoSalasDTO): Promise<TipoSalas>{

        const tipoSalasCreated = await this.tipoSalasRepository.create({
            idTipoSalas,
            tipoSalas,
        });

        return tipoSalasCreated;
    }

}

export {CreateTipoSalasUseCase};