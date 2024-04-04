import { inject, injectable } from "tsyringe";
import { IFuncionarioRepository } from "../../repositories/interfaces/IFuncionarioRepository";
import { Funcionario } from "../../entities/Funcionario";
import { AppError } from "../../../../shared/errors/AppError";

@injectable()
class FindFuncionarioByCpfUseCase {

    constructor(
        @inject("FuncionarioRepository")
        private funcionarioRepository: IFuncionarioRepository
    ) {}

    async execute(cpf: string): Promise<Funcionario> {

        const funcionario = this.funcionarioRepository.findByCpf(cpf);

        if(!funcionario) {
            throw new AppError("Funcionário inexistente!");
        }
        return funcionario;
    }
}

export { FindFuncionarioByCpfUseCase };
