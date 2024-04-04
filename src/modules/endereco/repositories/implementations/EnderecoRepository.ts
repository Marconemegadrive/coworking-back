import { Repository } from "typeorm";
import { Endereco } from "../../entities/Endereco";
import { AppDataSource } from "../../../../shared/database/data-source";
import { IEnderecoRepository } from "../interface/IEnderecoRepository";
import { ICreateEnderecoDTO } from "../dtos/ICreateEnderecoDTO";
import { IUpdateEnderecoDTO } from "../dtos/IUpdateEnderecoDTO";

class EnderecoRepository implements IEnderecoRepository {

    private repository: Repository<Endereco>;

    constructor() {
        this.repository = AppDataSource.getRepository(Endereco);
    }

    async create({ uf, cep, cidade, bairro, rua, numero, complemento, obs, cliente_idCliente }: ICreateEnderecoDTO): Promise<Endereco> {
        
        const enderecoCreated = this.repository.create({
            uf, 
            cep, 
            cidade, 
            bairro, 
            rua, 
            numero, 
            complemento, 
            obs, 
            cliente_idCliente
        });

        await this.repository.save(enderecoCreated);

        return enderecoCreated;
    }

    async list(): Promise<Endereco[]> {
        
        const enderecosAll = await this.repository.find();

        return enderecosAll;
    }

    async findByIdCliente(cliente_idCliente: number): Promise<Endereco> {
        
        const enderecoFound = await this.repository.findOne({ where: { cliente_idCliente } });

        return enderecoFound;
    }

    async update(cliente_idCliente: number, { uf, cep, cidade, bairro, rua, numero, complemento, obs }: IUpdateEnderecoDTO): Promise<Endereco> {
        
        const enderecoUpdated = await this.repository.findOne({ where: { cliente_idCliente } });

        if (enderecoUpdated) {
            
            enderecoUpdated.uf = uf ? uf : enderecoUpdated.uf;
            enderecoUpdated.cep = cep ? cep : enderecoUpdated.cep;
            enderecoUpdated.cidade = cidade ? cidade : enderecoUpdated.cidade;
            enderecoUpdated.bairro = bairro ? bairro : enderecoUpdated.bairro;
            enderecoUpdated.rua = rua ? rua : enderecoUpdated.rua;
            enderecoUpdated.numero = numero ? numero : enderecoUpdated.numero;
            enderecoUpdated.complemento = complemento ? complemento : enderecoUpdated.complemento;
            enderecoUpdated.obs = obs ? obs : enderecoUpdated.obs;

            await this.repository.save(enderecoUpdated);

            return enderecoUpdated;
        }
    }

    async delete(cliente_idCliente: number): Promise<Endereco> {
        
        const enderecoDeleted = await this.repository.findOne({ where: { cliente_idCliente } });

        if (enderecoDeleted) {
            await this.repository.remove(enderecoDeleted);
            return enderecoDeleted;
        }
    }
}

export { EnderecoRepository };