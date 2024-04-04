import { inject, injectable } from "tsyringe";
import { IEmailRepository } from "../../repositories/interfaces/IEmailRepository";
import { Email } from "../../entities/Email";
import { AppError } from "../../../../shared/errors/AppError";

@injectable()
class FindEmailByCpfFuncionarioUseCase {

    constructor(
        @inject("EmailRepository")
        private emailRepository: IEmailRepository
    ) {}

    async execute(cpfFuncionario: string): Promise<Email> {

        const emailFound = await this.emailRepository.findByCpfFuncionario(cpfFuncionario);

        if (!emailFound) {
            throw new AppError("Email Inexistente!");
        }

        return emailFound;
    }
}

export { FindEmailByCpfFuncionarioUseCase };