import { Repository } from "typeorm";
import { Encomenda } from "../../entities/Encomenda";
import { ICreateEncomendaDTO } from "../dtos/ICreateEncomendaDTO";
import { IUpdateEncomendaDTO } from "../dtos/IUpdateEncomendaDTO";
import { IEncomendaRepository } from "../interfaces/IEncomendaRepository";
import { AppDataSource } from "../../../../shared/database/data-source";


export class EncomendaRepository implements IEncomendaRepository {
    
    private repository: Repository<Encomenda>;

        async create({ obsEncomenda, idEndFiscal, idCliente }: ICreateEncomendaDTO): Promise<Encomenda> {
        
        const encomenda = this.repository.create({
            obsEncomenda, 
            idEndFiscal, 
            idCliente,
                       
        });

        await this.repository.save(encomenda);

        return encomenda
    }
    
    async list(): Promise<Encomenda[]> {
        
        const encomendas = await this.repository.find();

        return encomendas;
    }

    async findEncomendaById(idEncomenda: number): Promise<Encomenda> {
        const encomenda = await this.repository.findOne({ where: { idEncomenda } });

        return encomenda;
    }

    async findEncomendaByIdCliente(idCliente: number): Promise<Encomenda> {
        const encomenda = await this.repository.findOne({ where: { idCliente} });

        return encomenda;
    }

    async updateEncomenda(idEncomenda: number, { obsEncomenda, idEndFiscal, idCliente}: IUpdateEncomendaDTO): Promise<Encomenda> {
        const encomenda = await this.repository.findOne({ where: { idEncomenda } });

        if (encomenda) {
            encomenda.obsEncomenda = obsEncomenda ? obsEncomenda  : encomenda.obsEncomenda;
            encomenda.idEndFiscal = idEndFiscal ? idEndFiscal : encomenda.idEndFiscal;
            encomenda.idCliente = idCliente ? idCliente : encomenda.idUsuario;
    
            await this.repository.save(encomenda);

            return encomenda;
        }
    }

    async deleteEncomenda(idEncomenda: number): Promise<Encomenda> {
        
        const encomenda = await this.repository.findOne({ where: { idEncomenda } });

        if(encomenda) {
            await this.repository.remove(encomenda);
            return encomenda;
        }
    }
}

