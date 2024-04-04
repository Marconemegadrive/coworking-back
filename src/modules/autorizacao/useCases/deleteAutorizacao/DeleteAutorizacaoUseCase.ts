import { inject, injectable } from "tsyringe";
import { IAutorizacaoRepository } from "../../repositories/interfaces/IAutorizacaoRepository";
import { AppError } from "../../../../shared/errors/AppError";
import { Autorizacao } from "../../entities/Autorizacao";

@injectable()
class DeleteAutorizacaoUseCase {

    constructor(
        @inject("AutorizacaoRepository")
        private autorizacaoRepository: IAutorizacaoRepository
    ){}

    async execute(idAutorizacao: number): Promise<Autorizacao> {

        const autorizacaoFound = await this.autorizacaoRepository.findById(idAutorizacao);

        if(!autorizacaoFound) {
            throw new AppError("Autorizacao não encontrada");
        }

        const autorizacaoDelete = await this.autorizacaoRepository.delete(idAutorizacao);

        return autorizacaoDelete;
    }
}
export { DeleteAutorizacaoUseCase };