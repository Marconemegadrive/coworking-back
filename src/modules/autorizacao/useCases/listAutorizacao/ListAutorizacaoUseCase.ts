import { inject, injectable } from "tsyringe";
import { IAutorizacaoRepository } from "../../repositories/interfaces/IAutorizacaoRepository";
import { Autorizacao } from "../../entities/Autorizacao";
import { AppError } from "../../../../shared/errors/AppError";

@injectable()
class ListAutorizacaoUseCase {

    constructor(
        @inject("AutorizacaoRepository")
        private autorizacaoRepository: IAutorizacaoRepository
    ){}

    async execute(idAutorizacao: number): Promise<Autorizacao> {

        const autorizacaoFound = await this.autorizacaoRepository.findById(idAutorizacao);

        if(!autorizacaoFound) {
            throw new AppError("Autorização não encontrada");
        }

        return autorizacaoFound;
    }
}
export { ListAutorizacaoUseCase };

