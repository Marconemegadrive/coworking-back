import { Repository } from "typeorm";
import { AppDataSource } from "../../../../shared/database/data-source";
import { TipoSalas } from "../../entities/TipoSalas";
import { ITipoSalasRepository } from "../interfaces/ITipoSalasRepository";
import { ICreateTipoSalasDTO } from "../dtos/ICreateTipoSalasDTO";

class TipoSalasRepository implements ITipoSalasRepository {

    private repository: Repository<TipoSalas>;

    constructor() {

        this.repository = AppDataSource.getRepository(TipoSalas);
    }

    async create({ tipoSalas }: ICreateTipoSalasDTO): Promise<TipoSalas> {
        
        const tipoSalasCreated = this.repository.create({
            tipoSalas,
        });

        await this.repository.save(tipoSalasCreated);

        return tipoSalasCreated;
    }

    async list(): Promise<TipoSalas[]> {

        const tipoSalasFound = await this.repository.find();

        return tipoSalasFound;
    }

    async findById(idTipoSalas: number): Promise<TipoSalas> {

        const tipoSalasFound = await this.repository.findOne({ where: { idTipoSalas}});

        return tipoSalasFound;
            
    }

    async update(idTipoSalas: number, tipo: string): Promise<TipoSalas> {
        
        const tipoSalasUpdate = await this.repository.findOne({ where: { idTipoSalas }});

        if (!tipoSalasUpdate){
            tipoSalasUpdate.idTipoSalas = idTipoSalas ? idTipoSalas : tipoSalasUpdate.idTipoSalas;
            
            await this.repository.save(tipoSalasUpdate);

            return tipoSalasUpdate; 
        }
        
    }

    async delete(idTipoSalas: number): Promise<TipoSalas> {

        const tipoSalasDeleted = await this.repository.findOne({ where: { idTipoSalas }});

        if (tipoSalasDeleted) {
            await this.repository.remove(tipoSalasDeleted);
            return tipoSalasDeleted;
        }
        
    }

}

export {TipoSalasRepository};