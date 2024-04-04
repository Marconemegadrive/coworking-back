import { inject, injectable } from "tsyringe";
import { INivelAcessoRepository } from "../../repositories/interfaces/INivelAcessoRepository";
import { NivelAcesso } from "../../entities/NivelAcesso";

@injectable()
class ListNivelAcessoUseCase {

    constructor(
        @inject("NivelAcessoRepository")
        private nivelAcessoRepository: INivelAcessoRepository
    ) {}

    async execute(): Promise<NivelAcesso[]> {

        const niveisAcessoAll = await this.nivelAcessoRepository.list();

        return niveisAcessoAll;
    }
}

export { ListNivelAcessoUseCase };