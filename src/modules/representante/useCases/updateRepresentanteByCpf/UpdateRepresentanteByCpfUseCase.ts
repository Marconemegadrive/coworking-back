import { inject, injectable } from "tsyringe";
import { IRepresentanteRepository } from "../../repositories/interfaces/IRepresentanteRepository";
import { Representante } from "../../entities/Representante";
import { AppError } from "../../../../shared/errors/AppError";
import { IUpdateRepresentanteDTO } from "../../repositories/dtos/IUpdateRepresentanteDTO";

@injectable()
class UpdateRepresentanteByCpfUseCase {

    constructor(
        @inject("RepresentanteRepository")
        private representanteRepository: IRepresentanteRepository
    ) { }

    async execute(cpfRepresentante: string, { nome, email, telefone, cnpj, idUsuario }: IUpdateRepresentanteDTO): Promise<Representante> {

        const representanteExist = await this.representanteRepository.findRepresentanteByCpf(cpfRepresentante);

        if (!representanteExist) {
            throw new AppError("Representante inexistente!");
        }

        const representanteUpdated = await this.representanteRepository.updateRepresentante(cpfRepresentante, {
            nome,
            telefone,
            email,
            cnpj,
            idUsuario
        });
        return representanteUpdated;
    }
}

export { UpdateRepresentanteByCpfUseCase };
