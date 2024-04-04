import { inject, injectable } from "tsyringe";
import { ITipoAutorizacaoRepository } from "../../repositories/interfaces/ITipoAutorizacaoRepository";
import { TipoAutorizacao } from "../../entities/TipoAutorizacao";
import { AppError } from "../../../../shared/errors/AppError";

@injectable()
class FindTipoAutorizacaoByIdUseCase {
   
    constructor(
        @inject("TipoAutorizacaoRepository")
        private tipoAutorizacaoRepository: ITipoAutorizacaoRepository
    ) {}

async execute(idTipoAutorizacao: number): Promise<TipoAutorizacao> {
    
    const tipo_Autorizacao= this.tipoAutorizacaoRepository.findById(idTipoAutorizacao);

    if(!tipo_Autorizacao) {
        
        throw new AppError ("Tipo Autorização Existente!");
    }

    return tipo_Autorizacao;

}

}

export { FindTipoAutorizacaoByIdUseCase};