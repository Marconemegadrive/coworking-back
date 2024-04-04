import { injectable, inject } from "tsyringe";
import { ITipoSalasRepository } from "../../repositories/interfaces/ITipoSalasRepository";
import { TipoSalas } from "../../entities/TipoSalas";

@injectable()
class ListTipoSalasUseCase {

    constructor(

        @inject("TipoSalasRepository")
        private tipoSalasRepository: ITipoSalasRepository
    ) {}

    async execute(): Promise<TipoSalas[]> {

        const tipoSalasAll = await this.tipoSalasRepository.list();

        return tipoSalasAll;
    }
}

export { ListTipoSalasUseCase };