import { Repository } from "typeorm";
import { ClienteCpf } from "../../entities/ClienteCpf";
import { AppDataSource } from "../../../../shared/database/data-source";
import { IClienteCpfRepository } from "../interfaces/IClienteCpfRepository";
import { ICreateClienteCpfDTO } from "../dtos/ICreateClienteCpfDTO";

class ClienteCpfRepository implements IClienteCpfRepository {

    private repository: Repository<ClienteCpf>;

    constructor() {
        this.repository = AppDataSource.getRepository(ClienteCpf);
    }

    async create({ cpf, nome, dataNasc, Cliente_idCliente, usuario_idUsuario }: ICreateClienteCpfDTO): Promise<ClienteCpf> {
        
        const clienteCpfCreated = this.repository.create({
            cpf, 
            nome, 
            dataNasc, 
            Cliente_idCliente, 
            usuario_idUsuario
        });

        await this.repository.save(clienteCpfCreated);

        return clienteCpfCreated;
    }

    async list(): Promise<ClienteCpf[]> {
        
        const clientesCpfAll = await this.repository.find();

        return clientesCpfAll;
    }

    async findByCpf(cpf: string): Promise<ClienteCpf> {
        
        const clienteCpfFound = await this.repository.findOne({ where: { cpf } });

        return clienteCpfFound;
    }

    async delete(cpf: string): Promise<ClienteCpf> {
        
        const clienteCpfDeleted = await this.repository.findOne({ where: { cpf } });

        if (clienteCpfDeleted) {
            await this.repository.remove(clienteCpfDeleted);
            return clienteCpfDeleted;
        }
    }
}

export { ClienteCpfRepository };