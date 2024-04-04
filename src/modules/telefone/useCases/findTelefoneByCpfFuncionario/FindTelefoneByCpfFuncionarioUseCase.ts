import { inject, injectable } from "tsyringe";
import { ITelefoneRepository } from "../../repositories/interfaces/ITelefoneRepository";
import { AppError } from "../../../../shared/errors/AppError";
import { Telefone } from "../../entities/Telefone";

@injectable()
class FindTelefoneByCpfFuncionarioUseCase {

    constructor(
        @inject("TelefoneRepository")
        private telefoneRepository: ITelefoneRepository
    ) {}

    async execute(cpfFuncionario: string): Promise<Telefone> {

        const telefoneFound = await this.telefoneRepository.findByCpfFuncionario(cpfFuncionario);

        if (!telefoneFound) {
            throw new AppError("Telefone Inexistente!");
        }

        return telefoneFound;
    }
}

export { FindTelefoneByCpfFuncionarioUseCase };