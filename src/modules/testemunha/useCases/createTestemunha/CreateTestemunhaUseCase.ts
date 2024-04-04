import { inject, injectable } from "tsyringe";
import { ITestemunhaRepository } from "../../repositories/interfaces/ITestemunhaRepository";
import { ICreateTestemunhaDTO } from "../../repositories/dtos/ICreateTestemunhaDTO";
import { Testemunha } from "../../entities/Testemunha";

@injectable()
class CreateTestemunhaUseCase {

    constructor(
        @inject("TestemunhaRepository")
        private testemunhaRepository: ITestemunhaRepository
    ) {}

    async execute({ nome, cpf }: ICreateTestemunhaDTO): Promise<Testemunha> {

        const testemunhaCreated = await this.testemunhaRepository.create({
            nome,
            cpf
        });

        return testemunhaCreated;
    }
}

export { CreateTestemunhaUseCase };