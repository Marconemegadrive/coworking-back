import { Repository } from "typeorm";
import { TipoContrato } from "../../entities/TipoContrato";
import { ICreateTipoContratoDTO } from "../dtos/ICreateTipoContratoDTO";
import { ITipoContratoRepository } from "../interfaces/ITipoContratoRepository";
import { IUpdateTipoContratoDTO } from "../dtos/IUpdateTipoContratoDTO";
import { AppDataSource } from "../../../../shared/database/data-source";

class TipoContratoRepository implements ITipoContratoRepository {

    private repository: Repository<TipoContrato>;
    
    constructor() {
        this.repository = AppDataSource.getRepository(TipoContrato);
    }

    async create({ idTipoContrato, descricao }: ICreateTipoContratoDTO): Promise<TipoContrato> {

        const tipoContrato = this.repository.create({
            idTipoContrato,
            descricao
        });
        await this.repository.save(tipoContrato);

        return tipoContrato;
    }

    async list(): Promise<TipoContrato[]> {
        const tipoContrato = await this.repository.find();

        return tipoContrato;
    }

    async findById(idTipoContrato: number): Promise<TipoContrato> {
        
        const idTipoContratoFound = await this.repository.findOne({ where: { idTipoContrato } });

        return idTipoContratoFound;
    }

    async update(idTipoContrato: number, { descricao }: IUpdateTipoContratoDTO): Promise<TipoContrato> {
        
        const tipoContrato = await this.repository.findOne({ where: { idTipoContrato } });

        if(tipoContrato) {
            tipoContrato.descricao = descricao ? descricao : tipoContrato.descricao;

            await this.repository.save(tipoContrato);
        }

        return tipoContrato;
    }

    async delete(idTipoContrato: number): Promise<TipoContrato> {

        const idTipoContratoDeleted = await this.repository.findOne({ where: { idTipoContrato } });

        if(idTipoContratoDeleted) {
            await this.repository.remove(idTipoContratoDeleted);
            return idTipoContratoDeleted;
        }
    }
}

export { TipoContratoRepository };