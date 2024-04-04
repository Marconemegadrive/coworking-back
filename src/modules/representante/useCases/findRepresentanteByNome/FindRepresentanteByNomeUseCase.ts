import { inject, injectable } from "tsyringe";
import { IRepresentanteRepository } from "../../repositories/interfaces/IRepresentanteRepository";
import { Representante } from "../../entities/Representante";
import { AppError } from "../../../../shared/errors/AppError";

@injectable()
class FindRepresentanteByNomeUseCase {

    constructor(
        @inject("RepresentanteRepository")
        private representanteRepository: IRepresentanteRepository
    ) {}

    async execute(nome: string): Promise<Representante> {
        
        const representante = await this.representanteRepository.findRepresentanteByNome(nome);

        if(!representante) {
            throw new AppError("Representante inexistente!");
        }
        return representante;
    }
}

export { FindRepresentanteByNomeUseCase };