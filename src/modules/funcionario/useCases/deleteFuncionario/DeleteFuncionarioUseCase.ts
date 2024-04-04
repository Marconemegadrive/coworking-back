import { inject, injectable } from "tsyringe";
import { IFuncionarioRepository } from "../../repositories/interfaces/IFuncionarioRepository";
import { Funcionario } from "../../entities/Funcionario";
import { AppError } from "../../../../shared/errors/AppError";

@injectable()
class DeleteFuncionarioUseCase {
 
    constructor(
        @inject("FuncionarioRepository")
        private funcionarioRepository: IFuncionarioRepository
    ) {}

    async execute(email: string): Promise<Funcionario> {
        
        const funcionarioFound = await this.funcionarioRepository.findByEmail(email);

        if (!funcionarioFound) {
            throw new AppError("Funcionário inexistente!");
        }

        const funcionarioDeleted = await this.funcionarioRepository.delete(email);

        return funcionarioDeleted;
    }
}

export { DeleteFuncionarioUseCase };