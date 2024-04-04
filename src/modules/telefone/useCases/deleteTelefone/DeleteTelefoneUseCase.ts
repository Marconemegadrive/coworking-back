import { inject, injectable } from "tsyringe";
import { ITelefoneRepository } from "../../repositories/interfaces/ITelefoneRepository";
import { Telefone } from "../../entities/Telefone";
import { AppError } from "../../../../shared/errors/AppError";

@injectable()
class DeleteTelefoneUseCase {

    constructor(
        @inject("TelefoneRepository")
        private telefoneRepository: ITelefoneRepository
    ) {}

    async execute(idTelefone: number): Promise<Telefone> {

        const telefoneFound = await this.telefoneRepository.findById(idTelefone);

        if (!telefoneFound) {
            throw new AppError("Telefone Inexistente");
        }

        const telefoneDeleted = await this.telefoneRepository.delete(idTelefone);

        return telefoneDeleted;
    }
}

export { DeleteTelefoneUseCase }