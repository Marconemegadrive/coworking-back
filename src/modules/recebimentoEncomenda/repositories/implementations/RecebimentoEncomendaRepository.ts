import { Repository } from "typeorm";
import { RecebimentoEncomenda } from "../../entities/RecebimentoEncomenda";
import { ICreateRecebimentoEncomendaDTO } from "../dtos/ICreateRecebimentoEncomendaDTO";
import { IRecebimentoEncomendaRepository } from "../interfaces/IRecebimentoEncomendaRepository";
import { AppDataSource } from "../../../../shared/database/data-source";
import { IUpdateRecebimentoEncomendaDTO } from "../dtos/IUpdateRecebimentoEncomendaDTO";

class RecebimentoEncomendaRepository implements IRecebimentoEncomendaRepository {
    
    private repository: Repository<RecebimentoEncomenda>;

    constructor() {
        this.repository = AppDataSource.getRepository(RecebimentoEncomenda);
    }

    async create({ obsRecEncomenda, dataHora, idEncomenda }: ICreateRecebimentoEncomendaDTO): Promise<RecebimentoEncomenda> {
        
        const recebimentoEncomenda = this.repository.create({
            obsRecEncomenda, 
            dataHora, 
            idEncomenda,
                       
        });

        await this.repository.save(recebimentoEncomenda);

        return recebimentoEncomenda;
    }
    
    async list(): Promise<RecebimentoEncomenda[]> {
        
        const recebimentoEncomendas = await this.repository.find();

        return recebimentoEncomendas;
    }

    async findRecebimentoEncomendaById(idRecebimentoEncomenda: number): Promise<RecebimentoEncomenda> {
        const recebimentoEncomenda = await this.repository.findOne({ where: { idRecebimentoEncomenda } });

        return recebimentoEncomenda;
    }

    async findRecebimentoEncomendaByIdEncomenda(idEncomenda: number): Promise<RecebimentoEncomenda> {
        const recebimentoEncomenda = await this.repository.findOne({ where: { idEncomenda} });

        return recebimentoEncomenda;
    }

    async updateRecebimentoEncomenda(idRecebimentoEncomenda: number, { obsRecEncomenda, idEncomenda}: IUpdateRecebimentoEncomendaDTO): Promise<RecebimentoEncomenda> {
        const recebimentoEncomenda = await this.repository.findOne({ where: { idRecebimentoEncomenda } });

        if (recebimentoEncomenda) {
            recebimentoEncomenda.obsRecEncomenda = obsRecEncomenda ? obsRecEncomenda  : recebimentoEncomenda.obsRecEncomenda;
            recebimentoEncomenda.idEncomenda = idEncomenda ? idEncomenda : recebimentoEncomenda.idEncomenda;
            
    
            await this.repository.save(recebimentoEncomenda);


            return recebimentoEncomenda;
        }
    }

    async deleteRecebimentoEncomenda(idRecebimentoEncomenda: number): Promise<RecebimentoEncomenda> {
        
        const recebimentoEncomenda = await this.repository.findOne({ where: { idRecebimentoEncomenda } });

        if(recebimentoEncomenda) {
            await this.repository.remove(recebimentoEncomenda);
            return recebimentoEncomenda;
        }
    }
}

export { RecebimentoEncomendaRepository };