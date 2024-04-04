import { inject, injectable } from "tsyringe";
import { Funcionario } from "../../entities/Funcionario";
import { ICreateFuncionarioDTO } from "../../repositories/dtos/ICreateFuncionarioDTO";
import { IFuncionarioRepository } from "../../repositories/interfaces/IFuncionarioRepository";
import { AppError } from "../../../../shared/errors/AppError";

@injectable()
class CreateFuncionarioUseCase {

    constructor(
        @inject("FuncionarioRepository")
        private funcionarioRepository: IFuncionarioRepository
    ) {}

    async execute({ cpf, nome, email, telefones, funcao, usuario_idUsuario }: ICreateFuncionarioDTO): Promise<Funcionario> {

        const funcionarioExists = await this.funcionarioRepository.findByCpf(cpf);

        if(funcionarioExists) {
             throw new AppError("Funcionário já cadastrado!");  
        }
        
        const funcionario = await this.funcionarioRepository.create({
            cpf, 
            nome, 
            email, 
            telefones, 
            funcao, 
            usuario_idUsuario
        });

        return funcionario;
    }
}

export { CreateFuncionarioUseCase };