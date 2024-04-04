import { inject, injectable } from "tsyringe";
import { IFuncionarioRepository } from "../../repositories/interfaces/IFuncionarioRepository";
import { Funcionario } from "../../entities/Funcionario";

@injectable()
class ListFuncionariosUseCase {

    constructor (
        @inject("FuncionarioRepository")
        private funcionarioRepository: IFuncionarioRepository
    ) {}

    async execute(): Promise<Funcionario[]> {
        const funcionarioAll = await this.funcionarioRepository.list();

        return funcionarioAll;
    }
}

export { ListFuncionariosUseCase };