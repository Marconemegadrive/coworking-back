import { inject, injectable } from "tsyringe";
import { IRepresentanteRepository } from "../../repositories/interfaces/IRepresentanteRepository";
import { Representante} from "../../entities/Representante";

@injectable()
export class ListRepresentantesUseCase {

    constructor (
        @inject("RepresentanteRepository")
        private representanteRepository: IRepresentanteRepository
    ) {}

    async execute(): Promise<Representante[]> {
        const representanteAll = await this.representanteRepository.list();

        return representanteAll;
    }
}
