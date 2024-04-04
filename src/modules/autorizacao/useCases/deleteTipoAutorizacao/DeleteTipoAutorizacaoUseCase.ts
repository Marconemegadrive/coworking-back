import { inject, injectable } from "tsyringe";
import { ITipoAutorizacaoRepository } from "../../repositories/interfaces/ITipoAutorizacaoRepository";
import { TipoAutorizacao } from "../../entities/TipoAutorizacao";
import { AppError } from "../../../../shared/errors/AppError";


@injectable()
class DeleteTipoAutorizacaoUseCase {

    constructor(
        @inject("TipoAutorizacaoRepository")
        private tipoAutorizacaoRepository: ITipoAutorizacaoRepository
    ){}

    async execute(idTipoAutorizacao: number): Promise<TipoAutorizacao> {

        const tipoAutorizacaoFound = await this.tipoAutorizacaoRepository.findById(idTipoAutorizacao);

        if (!tipoAutorizacaoFound) {
            throw new AppError("Tipo Autorizacao não existe");
        }

        const tipoAutorizacaoDeleted = await this.tipoAutorizacaoRepository.delete(idTipoAutorizacao);

        return tipoAutorizacaoDeleted;
    }
}

export { DeleteTipoAutorizacaoUseCase};