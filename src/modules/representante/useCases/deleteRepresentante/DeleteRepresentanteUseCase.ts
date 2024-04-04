import { inject, injectable } from "tsyringe";
import { IRepresentanteRepository } from "../../repositories/interfaces/IRepresentanteRepository";
import { Representante } from "../../entities/Representante";
import { AppError } from "../../../../shared/errors/AppError";

@injectable()
class DeleteRepresentanteUseCase {

    constructor(
        @inject("RepresentanteRepository")
        private representanteRepository: IRepresentanteRepository
    ) {}

    async execute(cpfRepresentante: string): Promise<Representante> {
        const representanteExists = await this.representanteRepository.findRepresentanteByCpf(cpfRepresentante);

        if(!representanteExists) {
            throw new AppError("Representante inexistente!");
        }

        const representanteDeletado = await this.representanteRepository.deleteRepresentante(cpfRepresentante);

        return representanteDeletado;
    }
}

export { DeleteRepresentanteUseCase };