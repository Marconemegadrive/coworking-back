import { Repository } from "typeorm";
import { ClientePj } from "../../entities/ClientePj";
import { AppDataSource } from "../../../../shared/database/data-source";
import { IClientePjRepository } from "../interfaces/IClientePjRepository";
import { ICreateClientePjDTO } from "../dtos/ICreateClientePjDTO";

class ClientePjRepository implements IClientePjRepository {

    private repository: Repository<ClientePj>;

    constructor() {
        this.repository = AppDataSource.getRepository(ClientePj);
    }

    async create({ cnpj, razaoSocial, nomeFantasia, dataFundacao, Cliente_idCliente }: ICreateClientePjDTO): Promise<ClientePj> {

        const clientePjCreated = this.repository.create({
            cnpj, 
            razaoSocial,
            nomeFantasia, 
            dataFundacao, 
            Cliente_idCliente,
        });

        await this.repository.save(clientePjCreated);
        
        return clientePjCreated;
    }

    async list(): Promise<ClientePj[]> {
        
        const clientesPjAll = await this.repository.find();

        return clientesPjAll;
    }

    async findByCnpj(cnpj: string): Promise<ClientePj> {
        
        const clientePjFound = await this.repository.findOne({ where: { cnpj } });

        return clientePjFound;
    }

    async delete(cnpj: string): Promise<ClientePj> {
        
        const clientePjDeleted = await this.repository.findOne({ where: { cnpj } });

        if (clientePjDeleted) {
            await this.repository.remove(clientePjDeleted);
            return clientePjDeleted;
        }
    }
}

export { ClientePjRepository };