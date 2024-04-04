import { inject, injectable } from "tsyringe";
import { ITipoContratoRepository } from "../../repositories/interfaces/ITipoContratoRepository";
import { TipoContrato } from "../../entities/TipoContrato";

@injectable()
class ListTipoContratoUseCase {

    constructor (
        @inject("TipoContratoRepository")
        private tipoContratoRepository: ITipoContratoRepository
    ) {} 

    async execute():Promise<TipoContrato[]> {
        const tipoContratoAll = await this.tipoContratoRepository.list();

        return tipoContratoAll;
    }
}

export { ListTipoContratoUseCase };