import { Funcionario } from "../../entities/Funcionario";
import { ICreateFuncionarioDTO } from "../dtos/ICreateFuncionarioDTO";

interface IFuncionarioRepository {

    create ({
        cpf,
        nome,
        email,
        telefones,
        funcao,
        usuario_idUsuario,
    }: ICreateFuncionarioDTO): Promise <Funcionario>;

    list(): Promise<Funcionario[]>;

    findByCpf(cpf: string): Promise<Funcionario>;

    findByEmail(email: string): Promise<Funcionario>;
    
    update(email: string, telefone: string): Promise<Funcionario>;
    
    delete(email: string): Promise<Funcionario>;
}

export { IFuncionarioRepository };