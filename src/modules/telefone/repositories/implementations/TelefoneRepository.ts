import { Repository } from "typeorm";
import { ITelefoneRepository } from "../interfaces/ITelefoneRepository";
import { Telefone } from "../../entities/Telefone";
import { AppDataSource } from "../../../../shared/database/data-source";
import { ICreateTelefoneDTO } from "../dtos/ICreateTelefoneDTO";

class TelefoneRepository implements ITelefoneRepository {

    private repository: Repository<Telefone>;

    constructor() {
        this.repository = AppDataSource.getRepository(Telefone);
    }

    async create({ telefone, Cliente_idCliente, Funcionario_cpf1 }: ICreateTelefoneDTO): Promise<Telefone> {
        
        const telefoneCreated = this.repository.create({
            telefone,
            Cliente_idCliente,
            Funcionario_cpf1
        });

        await this.repository.save(telefoneCreated);

        return telefoneCreated;
    }

    async list(): Promise<Telefone[]> {
        
        const telefonesAll = await this.repository.find();

        return telefonesAll;
    }

    async findByIdCliente(idCliente: number): Promise<Telefone> {
        
        const telefoneFound = await this.repository.findOne({ where: { Cliente_idCliente: idCliente } });

        return telefoneFound;
    }

    async findByCpfFuncionario(cpfFuncionario: string): Promise<Telefone> {
        
        const telefoneFound = await this.repository.findOne({ where: { Funcionario_cpf1: cpfFuncionario } });

        return telefoneFound;
    }

    async findById(idTelefone: number): Promise<Telefone> {
        
        const telefone = await this.repository.findOne({ where: { idTelefone } });

        return telefone;
    }

    async update(idTelefone: number, telefone: string): Promise<Telefone> {
        
        const telefoneUpdate = await this.repository.findOne({ where: { idTelefone } });

        if (telefoneUpdate) {
            telefoneUpdate.telefone = telefone ? telefone : telefoneUpdate.telefone;

            await this.repository.save(telefoneUpdate);

            return telefoneUpdate;
        }
    }

    async delete(idTelefone: number): Promise<Telefone> {
        
        const telefoneDeleted = await this.repository.findOne({ where: { idTelefone } });

        if (telefoneDeleted) {
            
            await this.repository.remove(telefoneDeleted);
            return telefoneDeleted;
        }
    }
}

export { TelefoneRepository };