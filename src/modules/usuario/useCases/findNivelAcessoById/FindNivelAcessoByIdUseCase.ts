import { inject, injectable } from "tsyringe";
import { INivelAcessoRepository } from "../../repositories/interfaces/INivelAcessoRepository";
import { NivelAcesso } from "../../entities/NivelAcesso";
import { AppError } from "../../../../shared/errors/AppError";

@injectable()
class FindNivelAcessoByIdUseCase {

    constructor(
        @inject("NivelAcessoRepository")
        private nivelAcessoRepository: INivelAcessoRepository
    ) {}

    async execute(idAcesso: number): Promise<NivelAcesso> {

        const nivelAcesso = await this.nivelAcessoRepository.findById(idAcesso);

        if (!nivelAcesso) {
            throw new AppError("Nível de acesso inexistente!");
        }

        return nivelAcesso;
    }

}

export { FindNivelAcessoByIdUseCase };