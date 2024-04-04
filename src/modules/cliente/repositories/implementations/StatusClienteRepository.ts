import { Repository } from "typeorm";
import { StatusCliente } from "../../entities/StatusCliente";
import { IStatusClienteRepository } from "../interfaces/IStatusClienteRepository";
import { AppDataSource } from "../../../../shared/database/data-source";

class StatusClienteRepository implements IStatusClienteRepository {

    private repository: Repository<StatusCliente>;

    constructor() {
        this.repository = AppDataSource.getRepository(StatusCliente);
    }

    async create(tipo: string): Promise<StatusCliente> {
        
        const statusCliente = this.repository.create({ tipo });

        await this.repository.save(statusCliente);

        return statusCliente;
    }

    async list(): Promise<StatusCliente[]> {
        
        const statusClienteAll = await this.repository.find();

        return statusClienteAll;
    }

    async findById(idStatus: number): Promise<StatusCliente> {
        
        const statusClienteFound = await this.repository.findOne({ where: { idStatus } });

        return statusClienteFound;
    }

    async update(idStatus: number, tipo: string): Promise<StatusCliente> {
        
        const statusClienteUpdated = await this.repository.findOne({ where: { idStatus } });
        
        if (statusClienteUpdated) {
            statusClienteUpdated.tipo = tipo ? tipo : statusClienteUpdated.tipo;

            await this.repository.save(statusClienteUpdated);

            return statusClienteUpdated;
        }
    }

    async delete(idStatus: number): Promise<StatusCliente> {
        
        const statusClienteDeleted = await this.repository.findOne({ where: { idStatus } });

        if (statusClienteDeleted) {
            await this.repository.remove(statusClienteDeleted);
            return statusClienteDeleted;
        }
    }
}

export { StatusClienteRepository };