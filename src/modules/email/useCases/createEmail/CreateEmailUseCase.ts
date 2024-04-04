import { inject, injectable } from "tsyringe";
import { EmailRepository } from "../../repositories/implementations/EmailRepository";
import { ICreateEmailDTO } from "../../repositories/dtos/ICreateEmailDTO";
import { Email } from "../../entities/Email";

@injectable()
class CreateEmailUseCase {

    constructor(
        @inject("EmailRepository")
        private emailRepository: EmailRepository
    ) {}

    async execute({ email, Cliente_idCliente, Funcionario_cpf }: ICreateEmailDTO): Promise<Email> {

        const emailCreated = await this.emailRepository.create({
            email, 
            Cliente_idCliente, 
            Funcionario_cpf
        });

        return emailCreated;
    }
}

export { CreateEmailUseCase };