import { inject, injectable } from "tsyringe";
import { IEmailRepository } from "../../repositories/interfaces/IEmailRepository";
import { Email } from "../../entities/Email";
import { AppError } from "../../../../shared/errors/AppError";

@injectable()
class FindEmailByIdClienteUseCase {

    constructor(
        @inject("EmailRepository")
        private emailRepository: IEmailRepository
    ) {}

    async execute(idCliente: number): Promise<Email> {

        const emailFound = await this.emailRepository.findByIdCliente(idCliente);

        if (!emailFound) {
            throw new AppError("Email Inexistente!");
        }

        return emailFound;
    }
}

export { FindEmailByIdClienteUseCase };