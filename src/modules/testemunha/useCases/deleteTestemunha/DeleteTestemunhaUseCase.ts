import { inject, injectable } from "tsyringe";
import { ITestemunhaRepository } from "../../repositories/interfaces/ITestemunhaRepository";
import { Testemunha } from "../../entities/Testemunha";
import { AppError } from "../../../../shared/errors/AppError";

@injectable()
class DeleteTestemunhaUseCase {

    constructor(
        @inject("TestemunhaRepository")
        private testemunhaRepository: ITestemunhaRepository
    ) {}

    async execute(idTestemunha: number): Promise<Testemunha> {
        
        const testemunhaFound = await this.testemunhaRepository.findById(idTestemunha);

        if(!testemunhaFound) {
            throw new AppError("Testemunha inexistente");
        }

        const testemunhaDeleted = await this.testemunhaRepository.delete(idTestemunha);

        return testemunhaDeleted;
    }
}

export { DeleteTestemunhaUseCase };