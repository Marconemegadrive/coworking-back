import { inject, injectable } from "tsyringe";
import { ITelefoneRepository } from "../../repositories/interfaces/ITelefoneRepository";
import { AppError } from "../../../../shared/errors/AppError";
import { Telefone } from "../../entities/Telefone";

@injectable()
class UpdateTelefoneUseCase {

    constructor(
        @inject("TelefoneRepository")
        private telefoneRepository: ITelefoneRepository
    ) {}

    async execute(idTelefone: number, telefone: string): Promise<Telefone> {

        const telefoneFound = await this.telefoneRepository.findById(idTelefone);

        if (!telefoneFound) {
            throw new AppError("Telefone Inexistente!");
        }

        const telefoneUpdate = await this.telefoneRepository.update(idTelefone, telefone);

        return telefoneUpdate;
    }
}

export { UpdateTelefoneUseCase };