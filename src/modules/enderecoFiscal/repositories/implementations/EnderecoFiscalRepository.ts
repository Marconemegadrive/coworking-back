import { Repository } from "typeorm";
import { EnderecoFiscal } from "../../entities/EnderecoFiscal";
import { IUpdateEnderecoFiscalDTO } from "../dtos/IUpdateEnderecoFiscalDTO";
import { ICreateEnderecoFiscalDTO } from "../dtos/ICreateEnderecoFiscalDTO";
import { IEnderecoFiscalRepository } from "../interfaces/IEnderecoFiscalRepository";
import { AppDataSource } from "../../../../shared/database/data-source";


class EnderecoFiscalRepository implements IEnderecoFiscalRepository {
    
    private repository: Repository<EnderecoFiscal>;

    constructor() {
        this.repository = AppDataSource.getRepository(EnderecoFiscal);
    }

    async create({ statusEndFiscal, cliente_idCliente }: ICreateEnderecoFiscalDTO): Promise<EnderecoFiscal> {
        
        const enderecoFiscal = this.repository.create({
            statusEndFiscal, 
            cliente_idCliente
        });

        await this.repository.save(enderecoFiscal);

        return enderecoFiscal
    }
    
    async list(): Promise<EnderecoFiscal[]> {
        const enderecosFiscais = await this.repository.find();

        return enderecosFiscais;
    }

    async findEnderecoFiscalByIdCliente(idCliente: number): Promise<EnderecoFiscal> {
        const enderecoFiscal = await this.repository.findOne({ where: { cliente_idCliente: idCliente } });

        return enderecoFiscal;
    }

    async findEnderecoFiscalById(idEndFiscal: number): Promise<EnderecoFiscal> {
        const enderecoFiscal = await this.repository.findOne({ where: { idEndFiscal } });

        return enderecoFiscal;
    }
       
    async findBystatusEndFiscal(statusEndFiscal: number): Promise<EnderecoFiscal> {
        const enderecoFiscal = await this.repository.findOne({ where: { statusEndFiscal} });

        return enderecoFiscal;
    }

    async updateEnderecoFiscal(idEndFiscal: number, { statusEndFiscal, idCliente}: IUpdateEnderecoFiscalDTO): Promise<EnderecoFiscal> {
        const enderecoFiscal = await this.repository.findOne({ where: { idEndFiscal } });

        if (enderecoFiscal) {
            enderecoFiscal.statusEndFiscal = statusEndFiscal ? statusEndFiscal  : enderecoFiscal.statusEndFiscal;
            enderecoFiscal.cliente_idCliente = idCliente ? idCliente : enderecoFiscal.cliente_idCliente;
    
            await this.repository.save(enderecoFiscal);

            return enderecoFiscal;
        }
    }

    async deleteEnderecoFiscal(idEndFiscal: number): Promise<EnderecoFiscal> {
        
        const enderecoFiscal = await this.repository.findOne({ where: { idEndFiscal } });

        if(enderecoFiscal) {
            await this.repository.remove(enderecoFiscal);
            return enderecoFiscal;
        }
    }
}

export { EnderecoFiscalRepository };