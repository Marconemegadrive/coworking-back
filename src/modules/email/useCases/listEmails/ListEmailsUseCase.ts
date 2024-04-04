import { inject, injectable } from "tsyringe";
import { IEmailRepository } from "../../repositories/interfaces/IEmailRepository";
import { Email } from "../../entities/Email";

@injectable()
class ListEmailsUseCase {

    constructor(
        @inject("EmailRepository")
        private emailRepository: IEmailRepository
    ) {}

    async execute(): Promise<Email[]> {

        const emailsAll = await this.emailRepository.list();

        return emailsAll;
    }
}

export { ListEmailsUseCase };