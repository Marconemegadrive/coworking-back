import { inject, injectable } from "tsyringe";
import { IRepresentanteRepository } from "../../repositories/interfaces/IRepresentanteRepository";
import { Representante } from "../../entities/Representante";
import { AppError } from "../../../../shared/errors/AppError";
import { IUpdateRepresentanteDTO } from "../../repositories/dtos/IUpdateRepresentanteDTO";

@injectable()
class UpdateRepresentanteByNomeUseCase {

    constructor(
        @inject("RepresentanteRepository")
        private representanteRepository: IRepresentanteRepository
    ) { }

    async execute(NomeRepresentante: string, { nome, email, telefone, cnpj, idUsuario }: IUpdateRepresentanteDTO): Promise<Representante> {

        const representanteExist = await this.representanteRepository.findRepresentanteByNome(NomeRepresentante);

        if (!representanteExist) {
            throw new AppError("Representante inexistente!");
        }

        const representanteUpdated = await this.representanteRepository.updateRepresentante(NomeRepresentante, {
            nome,
            telefone,
            email,
            cnpj,
            idUsuario
        });
        return representanteUpdated;
    }
}

export { UpdateRepresentanteByNomeUseCase };
