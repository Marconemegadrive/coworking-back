import { Repository } from "typeorm";
import { StatusSalas } from "../../entities/StatusSalas";
import { AppDataSource } from "../../../../shared/database/data-source";
import { IStatusSalasRepository } from "../interfaces/IStatusSalasRepository";
import { ICreateStatusSalasDTO } from "../dtos/ICreateStatusSalasDTO";

class StatusSalasRepository implements IStatusSalasRepository {

    private repository: Repository<StatusSalas>;

    constructor() {
        this.repository = AppDataSource.getRepository(StatusSalas);
    }

    async create({ statusSalas }: ICreateStatusSalasDTO): Promise<StatusSalas> {

        const statusSalasCreated = this.repository.create({
            statusSalas,
        });

        await this.repository.save(statusSalasCreated);

        return statusSalasCreated;

    }

    async list(): Promise<StatusSalas[]> {

        const StatusSalas = await this.repository.find();

        return StatusSalas;
    }

    async findById(idStatus: number): Promise<StatusSalas> {
        
        const statusSalasFound = await this.repository.findOne({ where: { idStatus } });

        return statusSalasFound;
    }

    async update(idStatus: number, statusSalas: string): Promise<StatusSalas> {

        const statusSalasUpdated = await this.repository.findOne({ where: { idStatus } });

        await this.repository.save(statusSalasUpdated);

        return statusSalasUpdated;
        
    }

    async delete(idStatus: number): Promise<StatusSalas> {
        
        const statusSalasDeleted = await this.repository.findOne({ where: { idStatus}});

        if(statusSalasDeleted) {
            await this.repository.remove(statusSalasDeleted);
            return statusSalasDeleted
        }

    }

}

export { StatusSalasRepository};