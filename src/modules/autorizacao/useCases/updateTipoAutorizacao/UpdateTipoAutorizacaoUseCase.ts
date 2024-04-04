import { inject, injectable } from "tsyringe";
import { AppError } from "../../../../shared/errors/AppError";
import { TipoAutorizacao } from "../../entities/TipoAutorizacao";
import { ITipoAutorizacaoRepository } from "../../repositories/interfaces/ITipoAutorizacaoRepository";


@injectable()
class UpdateTipoAutorizacaoUseCase {

    constructor(
        @inject("TipoAutorizacaoRepository")
        private tipoAutorizacaoRepository: ITipoAutorizacaoRepository
    ) {}

    async execute(idTipoAutorizacao: number, tipoAutorizacao: string): Promise<TipoAutorizacao> {

        const idTipoAutorizacaoFound = await this.tipoAutorizacaoRepository.findById(idTipoAutorizacao);

        if (!idTipoAutorizacaoFound) {
            throw new AppError("Tipo Autorizacao não existe");
        }

        const tipoAutorizacaoFound = await this.tipoAutorizacaoRepository.update(idTipoAutorizacao, tipoAutorizacao);

        return tipoAutorizacaoFound;
    }

}

export {UpdateTipoAutorizacaoUseCase};