import { inject, injectable } from "tsyringe";
import { INivelAcessoRepository } from "../../repositories/interfaces/INivelAcessoRepository";
import { NivelAcesso } from "../../entities/NivelAcesso";
import { AppError } from "../../../../shared/errors/AppError";

@injectable()
class DeleteNivelAcessoUseCase {

    constructor(
        @inject("NivelAcessoRepository")
        private nivelAcessoRepository: INivelAcessoRepository
    ) {}

    async execute(idAcesso: number): Promise<NivelAcesso> {

        const nivelAcessoAlreadyExists = await this.nivelAcessoRepository.findById(idAcesso);

        if (!nivelAcessoAlreadyExists) {
            throw new AppError("Nivel de acesso inexistente!");  
        }

        const nivelAcessoDeleted = await this.nivelAcessoRepository.delete(idAcesso);

        return nivelAcessoDeleted;
    }
}

export { DeleteNivelAcessoUseCase };