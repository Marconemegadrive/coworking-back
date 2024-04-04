import { inject, injectable } from "tsyringe";
import { IAutorizacaoRepository } from "../../repositories/interfaces/IAutorizacaoRepository";
import { Autorizacao } from "../../entities/Autorizacao";
import { AppError } from "../../../../shared/errors/AppError";

@injectable()
class FindAutorizacaoByIdUseCase {

    constructor(
        @inject("AutorizacaoRepository")
        private autorizacaoRepository: IAutorizacaoRepository
    ){}

    async execute(idAutorizacao: number): Promise<Autorizacao>{

        const autorizacaoFound = await this.autorizacaoRepository.findById(idAutorizacao);

        if(!autorizacaoFound) {
            throw new AppError("Autorizacao não encontrada ");
        }
        return autorizacaoFound;
    }
}
export { FindAutorizacaoByIdUseCase };