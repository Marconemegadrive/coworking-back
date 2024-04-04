import { inject, injectable } from "tsyringe";
import { IFuncionarioRepository } from "../../repositories/interfaces/IFuncionarioRepository";
import { Funcionario } from "../../entities/Funcionario";
import { AppError } from "../../../../shared/errors/AppError";

@injectable()
class UpdateFuncionarioUseCase {

    constructor(
        @inject("FuncionarioRepository")
        private funcionarioRepository: IFuncionarioRepository
    ) {}

    //Atualmente Esse update atualizar apenas o TELEFONE
    async execute(email: string, telefones: string): Promise<Funcionario> {
        
        const funcionarioFound = await this.funcionarioRepository.findByEmail(email);

        if(!funcionarioFound) {
            throw new AppError("Cliente Inexistente!");
        }

        const funcionarioUpdated = await this.funcionarioRepository.update(email, telefones);

        return funcionarioUpdated;
    }
}

export { UpdateFuncionarioUseCase };