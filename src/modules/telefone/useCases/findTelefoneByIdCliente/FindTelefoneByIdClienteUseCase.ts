import { inject, injectable } from "tsyringe";
import { ITelefoneRepository } from "../../repositories/interfaces/ITelefoneRepository";
import { AppError } from "../../../../shared/errors/AppError";
import { Telefone } from "../../entities/Telefone";

@injectable()
class FindTelefoneByIdClienteUseCase {

    constructor(
        @inject("TelefoneRepository")
        private telefoneRepository: ITelefoneRepository
    ) {}

    async execute(idCliente: number): Promise<Telefone> {

        const telefoneFound = await this.telefoneRepository.findByIdCliente(idCliente);

        if (!telefoneFound) {
            throw new AppError("Telefone Inexistente!");
        }

        return telefoneFound;
    }
}

export { FindTelefoneByIdClienteUseCase };