import { inject, injectable } from "tsyringe";
import { ITelefoneRepository } from "../../repositories/interfaces/ITelefoneRepository";
import { Telefone } from "../../entities/Telefone";

@injectable()
class ListTelefonesUseCase {

    constructor(
        @inject("TelefoneRepository")
        private telefoneRepository: ITelefoneRepository
    ) {}

    async execute(): Promise<Telefone[]> {

        const telefonesAll = await this.telefoneRepository.list();

        return telefonesAll;
    }
}

export { ListTelefonesUseCase };