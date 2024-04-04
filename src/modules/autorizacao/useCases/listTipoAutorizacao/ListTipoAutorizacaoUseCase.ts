import { inject, injectable } from "tsyringe";
import { ITipoAutorizacaoRepository } from "../../repositories/interfaces/ITipoAutorizacaoRepository";
import { TipoAutorizacao } from "../../entities/TipoAutorizacao";

@injectable()
class ListTipoAutorizacaoUseCase{

    constructor(
        @inject("TipoAutorizacaoRepository")
        private tipoAutorizacaoRepository: ITipoAutorizacaoRepository
    ) {}

    async execute(): Promise<TipoAutorizacao[]> {
        const tipoAutorizacaoAll = await this.tipoAutorizacaoRepository.list();

        return tipoAutorizacaoAll;
    }
}

export { ListTipoAutorizacaoUseCase}