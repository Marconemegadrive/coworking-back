import { inject, injectable } from "tsyringe";
import { IFuncionarioRepository } from "../../repositories/interfaces/IFuncionarioRepository";
import { Funcionario } from "../../entities/Funcionario";
import { AppError } from "../../../../shared/errors/AppError";

@injectable()
class FindFuncionarioByEmailUseCase {

    constructor(
        @inject("FuncionarioRepository")
        private funcionarioRepository: IFuncionarioRepository
    ) {}

    async execute(login: string): Promise<Funcionario> {
        
        const funcionarioFound = await this.funcionarioRepository.findByEmail(login);

        if (!funcionarioFound) {
            throw new AppError("Funcionário inexistente!");
        }
        return funcionarioFound;
    }
}

export { FindFuncionarioByEmailUseCase };