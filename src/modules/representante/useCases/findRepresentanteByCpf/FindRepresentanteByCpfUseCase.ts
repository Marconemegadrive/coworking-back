import { inject, injectable } from "tsyringe";
import { IRepresentanteRepository } from "../../repositories/interfaces/IRepresentanteRepository";
import { Representante } from "../../entities/Representante";
import { AppError } from "../../../../shared/errors/AppError";

@injectable()
class FindRepresentanteByCpfUseCase {

    constructor(
        @inject("RepresentanteRepository")
        private representanteRepository: IRepresentanteRepository
    ) {}

    async execute(cpfRepresentante: string): Promise<Representante> {
        
        const representante = await this.representanteRepository.findRepresentanteByCpf(cpfRepresentante);

        if(!representante) {
            throw new AppError("Representante inexistente!");
        }
        return representante;
    }
}

export { FindRepresentanteByCpfUseCase };