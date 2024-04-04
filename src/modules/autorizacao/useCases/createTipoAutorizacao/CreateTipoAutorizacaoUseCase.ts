import { inject, injectable } from "tsyringe";
import { ITipoAutorizacaoRepository } from "../../repositories/interfaces/ITipoAutorizacaoRepository";
import { ICreateTipoAutorizacaoDTO } from "../../repositories/dtos/ICreateTipoAutorizacaoDTO";
import { TipoAutorizacao } from "../../entities/TipoAutorizacao";
import { AppError } from "../../../../shared/errors/AppError";

@injectable()
class CreateTipoAutorizacaoUseCase {

    constructor(
        @inject("TipoAutorizacaoRepository")
        private tipoAutorizacaoRepository: ITipoAutorizacaoRepository
    ){}

    async execute({idTipoAutorizacao, tipoAutorizacao}: ICreateTipoAutorizacaoDTO): Promise<TipoAutorizacao>{

        const tipoAutorizacao1 = await this.tipoAutorizacaoRepository.create({
            idTipoAutorizacao,
            tipoAutorizacao
        });

        return tipoAutorizacao1;
    }

}

export {CreateTipoAutorizacaoUseCase};