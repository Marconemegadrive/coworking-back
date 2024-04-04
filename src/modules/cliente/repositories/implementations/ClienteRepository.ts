import { Repository } from "typeorm";
import { IClienteRepository } from "../interfaces/IClienteRepository";
import { Cliente } from "../../entities/Cliente";
import { AppDataSource } from "../../../../shared/database/data-source";
import { ICreateClienteDTO } from "../dtos/ICreateClienteDTO";

class ClienteRepository implements IClienteRepository {

    private repository: Repository<Cliente>;

    constructor() {
        this.repository = AppDataSource.getRepository(Cliente);
    }

    async create({ contrato, StatusCliente_idStatusCliente }: ICreateClienteDTO): Promise<Cliente> {
        
        const cliente = this.repository.create({
            contrato,
            StatusCliente_idStatusCliente,
        });

        await this.repository.save(cliente);

        return cliente;
    }

    async list(): Promise<Cliente[]> {
        
        const clientesAll = await this.repository.find();

        return clientesAll;
    }

    async findById(idCliente: number): Promise<Cliente> {
        
        const clienteFound = await this.repository.findOne({ where: { idCliente } });

        return clienteFound;
    }

    async update(idCliente: number, contrato: string): Promise<Cliente> {
        
        const clienteUpdated = await this.repository.findOne({ where: { idCliente } });
        
        if (clienteUpdated) {
            clienteUpdated.contrato = contrato ? contrato : clienteUpdated.contrato;
            clienteUpdated.dataAtualizacao = new Date();

            await this.repository.save(clienteUpdated);

            return clienteUpdated;
        }
    }

    async delete(idCliente: number): Promise<Cliente> {
        
        const clienteDeleted = await this.repository.findOne({ where: { idCliente } });

        if (clienteDeleted) {
            await this.repository.remove(clienteDeleted);
            return clienteDeleted;
        }
    }
}

export { ClienteRepository };