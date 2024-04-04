import { inject, injectable } from "tsyringe";
import { IAutorizacaoRepository } from "../../repositories/interfaces/IAutorizacaoRepository";
import { Autorizacao } from "../../entities/Autorizacao";
import { ICreateAutorizacaoDTO } from "../../repositories/dtos/ICreateAutorizacaoDTO";


@injectable()
class CreateAutorizacaoUseCase {

    constructor(
        @inject("AutorizacaoRepository")
        private autorizacaoRepository: IAutorizacaoRepository
    ){}

    async execute({obs, funcionario_cpf, tipoAutorizacao_idtipoAutorizacao}: ICreateAutorizacaoDTO): Promise<Autorizacao>{

        const autorizacao = await this.autorizacaoRepository.create({
            obs, 
            funcionario_cpf, 
            tipoAutorizacao_idtipoAutorizacao
        });

        return autorizacao;
    }
}
export { CreateAutorizacaoUseCase };