import { injectable, inject } from "tsyringe";
import { AppError } from "../../../../shared/errors/AppError";
import { Autorizacao } from "../../entities/Autorizacao";
import { IAutorizacaoRepository } from "../../repositories/interfaces/IAutorizacaoRepository";

@injectable()
class UpdateAutorizacaoUseCase {

    constructor(
        @inject("AutorizacaoRepository")
        private autorizacaoRepository: IAutorizacaoRepository
    ){}

    async execute(
        idAutorizacao: number, 
        obs: string, 
        funcionario_cpf: string, 
        tipoAutorizacao_idtipoAutorizacao: number): Promise<Autorizacao> {

            const autorizacaoFound = await this.autorizacaoRepository.findById(idAutorizacao);

            if (!autorizacaoFound){
                throw new AppError("Autorizacao não encontrada");
            }

            const autorizacaoUpdated = await this.autorizacaoRepository.update(idAutorizacao, obs, 
                funcionario_cpf, tipoAutorizacao_idtipoAutorizacao);

            return autorizacaoUpdated;
        }
}
export { UpdateAutorizacaoUseCase };