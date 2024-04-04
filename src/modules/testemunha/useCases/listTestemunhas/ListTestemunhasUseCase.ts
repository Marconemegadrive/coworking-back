import { inject, injectable } from "tsyringe";
import { ITestemunhaRepository } from "../../repositories/interfaces/ITestemunhaRepository";
import { Testemunha } from "../../entities/Testemunha";

@injectable()
class ListTestemunhasUseCase {
    
    constructor(
        @inject("TestemunhaRepository")
        private testemunhaRepository: ITestemunhaRepository
    ) {}

    async execute(): Promise<Testemunha[]> {
        const testemunhasAll = await this.testemunhaRepository.list();

        return testemunhasAll;
    }
}

export { ListTestemunhasUseCase };