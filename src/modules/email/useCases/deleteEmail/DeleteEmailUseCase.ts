import { inject, injectable } from "tsyringe";
import { IEmailRepository } from "../../repositories/interfaces/IEmailRepository";
import { Email } from "../../entities/Email";
import { AppError } from "../../../../shared/errors/AppError";

@injectable()
class DeleteEmailUseCase {

    constructor(
        @inject("EmailRepository")
        private emailRepository: IEmailRepository
    ) {}

    async execute(idEmail: number): Promise<Email> {

        const emailDeleted = await this.emailRepository.delete(idEmail);

        if (!emailDeleted) {
            throw new AppError("Email Inexistente!");
        }

        return emailDeleted;
    }
}

export { DeleteEmailUseCase };