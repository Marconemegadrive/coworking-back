import { inject, injectable } from "tsyringe";
import { INivelAcessoRepository } from "../../repositories/interfaces/INivelAcessoRepository";
import { NivelAcesso } from "../../entities/NivelAcesso";
import { AppError } from "../../../../shared/errors/AppError";
import { IUpdateNivelAcessoDTO } from "../../repositories/dtos/IUpdateNivelAcessoDTO";

@injectable()
class UpdateNivelAcessoUseCase {

    constructor(
        @inject("NivelAcessoRepository")
        private nivelAcessoRepository: INivelAcessoRepository
    ) {}

    async execute(idAcesso: number, { nome, nivel }: IUpdateNivelAcessoDTO): Promise<NivelAcesso> {

        const nivelAcessoAlreadyExists = await this.nivelAcessoRepository.findById(idAcesso);

        if (!nivelAcessoAlreadyExists) {
            throw new AppError("Nivel de acesso inexistente!");  
        }

        const nivelAcessoUpdated = await this.nivelAcessoRepository.update(idAcesso, {
            nome,
            nivel,
        });

        return nivelAcessoUpdated;
    }
}

export { UpdateNivelAcessoUseCase }