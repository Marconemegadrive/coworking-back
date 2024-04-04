import { Repository } from "typeorm";
import { RetiradaEncomenda } from "../../entities/RetiradaEncomenda";
import { ICreateRetiradaEncomendaDTO } from "../dtos/ICreateRetiradaEncomendaDTO";
import { IUpdateRetiradaEncomendaDTO } from "../dtos/IUpdateRetiradaEncomendaDTO";
import { IRetiradaEncomendaRepository } from "../interfaces/IRetiradaEncomendaRepository";
import { AppDataSource } from "../../../../shared/database/data-source";

export class RetiradaEncomendaRepository implements IRetiradaEncomendaRepository {
    
    private repository: Repository<RetiradaEncomenda>;

    constructor() {
        this.repository = AppDataSource.getRepository(RetiradaEncomenda);
    }

    async create({ obsRetEncomenda, idEncomenda }: ICreateRetiradaEncomendaDTO): Promise<RetiradaEncomenda> {
        
        const retiradaEncomenda = this.repository.create({
            obsRetEncomenda, 
            idEncomenda,
                       
        });

        await this.repository.save(retiradaEncomenda);

        return retiradaEncomenda;
    }
    
    async list(): Promise<RetiradaEncomenda[]> {
        
        const retiradaEncomendas = await this.repository.find();

        return retiradaEncomendas;
    }

    async findRetiradaEncomendaById(idRetiradaEncomenda: number): Promise<RetiradaEncomenda> {
        const retiradaEncomenda = await this.repository.findOne({ where: { idRetiradaEncomenda } });

        return retiradaEncomenda;
    }

    async findRetiradaEncomendaByIdEncomenda(idEncomenda: number): Promise<RetiradaEncomenda> {
        const retiradaEncomenda = await this.repository.findOne({ where: { idEncomenda} });

        return retiradaEncomenda;
    }

    async updateRetiradaEncomenda(idRetiradaEncomenda: number, { obsRetEncomenda, idEncomenda}: IUpdateRetiradaEncomendaDTO): Promise<RetiradaEncomenda> {
        const retiradaEncomenda = await this.repository.findOne({ where: { idRetiradaEncomenda } });

        if (retiradaEncomenda) {
            retiradaEncomenda.obsRetEncomenda = obsRetEncomenda ? obsRetEncomenda  : retiradaEncomenda.obsRetEncomenda;
            retiradaEncomenda.idEncomenda = idEncomenda ? idEncomenda : retiradaEncomenda.idEndFiscal;
            
    
            await this.repository.save(retiradaEncomenda);

            return retiradaEncomenda;
        }
    }

    async deleteRetiradaEncomenda(idRetiradaEncomenda: number): Promise<RetiradaEncomenda> {
        
        const retiradaEncomenda = await this.repository.findOne({ where: { idRetiradaEncomenda } });

        if(retiradaEncomenda) {
            await this.repository.remove(retiradaEncomenda);
            return retiradaEncomenda;
        }
    }
}
