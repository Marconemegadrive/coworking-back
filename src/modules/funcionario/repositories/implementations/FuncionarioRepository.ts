import { Repository } from "typeorm";
import { Funcionario } from "../../entities/Funcionario";
import { ICreateFuncionarioDTO } from "../dtos/ICreateFuncionarioDTO";
import { IFuncionarioRepository } from "../../repositories/interfaces/IFuncionarioRepository";
import { AppDataSource } from "../../../../shared/database/data-source";

class FuncionarioRepository implements IFuncionarioRepository {

    private repository: Repository<Funcionario>;

    constructor() {
        this.repository = AppDataSource.getRepository(Funcionario);
    }

    async create({ cpf, nome, email, telefones, funcao, usuario_idUsuario }: ICreateFuncionarioDTO): Promise<Funcionario> {

        const funcionario = this.repository.create({
            cpf,
            nome,
            email,
            telefones,
            funcao,
            usuario_idUsuario
        });

        await this.repository.save(funcionario);

        return funcionario;
    }

    async list(): Promise<Funcionario[]> {

        const funcionarios = await this.repository.find();

        return funcionarios;
    }

    async findByCpf(cpf: string): Promise<Funcionario> {
        const funcionario = await this.repository.findOne({ where: { cpf } });

        return funcionario;
    }

    async findByEmail(email: string): Promise<Funcionario> {

        //TO-DO: Email será único para cada funcionário?
        // um usuário poderá ter mais de um usuário cadastrado por email ou apenas + contratos?
        const funcionarioFound = await this.repository.findOne({ where: { email } });

        return funcionarioFound;
    }

    async update(email: string, telefones: string): Promise<Funcionario> {

        //TO-DO: verificar quais campos podem ser atualizados de Funcionário
        //TO-DO: adicionar verificação de telefone (para não aceitar strings)
        const funcionarioUpdated = await this.repository.findOne({ where: { email } });

        if (funcionarioUpdated) {
            funcionarioUpdated.telefones = telefones ? telefones : funcionarioUpdated.telefones;

            funcionarioUpdated.telefones = telefones;
            funcionarioUpdated.dataAtualizacao = new Date();

            await this.repository.save(funcionarioUpdated);

            return funcionarioUpdated;
        }
    }

    async delete(email: string): Promise<Funcionario> {

        const funcionarioDeleted = await this.repository.findOne({ where: { email } });

        if(funcionarioDeleted) {
            await this.repository.remove(funcionarioDeleted);
            return funcionarioDeleted;
        }
    }
}

export { FuncionarioRepository };