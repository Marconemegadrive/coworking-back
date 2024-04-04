import { inject, injectable } from "tsyringe";
import { IEmailRepository } from "../../repositories/interfaces/IEmailRepository";
import { Email } from "../../entities/Email";
import { AppError } from "../../../../shared/errors/AppError";

@injectable()
class UpdateEmailUseCase {

    constructor(
        @inject("EmailRepository")
        private emailRepository: IEmailRepository
    ) {}

    async execute(idEmail: number, email: string): Promise<Email> {

        const emailUpdated = await this.emailRepository.update(idEmail, email);

        if (!emailUpdated) {
            throw new AppError("Email Inexistente!");
        }

        return emailUpdated;
    }
}

export { UpdateEmailUseCase };