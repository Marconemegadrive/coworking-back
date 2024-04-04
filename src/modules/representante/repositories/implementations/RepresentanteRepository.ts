import { Repository } from "typeorm";
import { Representante } from "../../entities/Representante";
import { ICreateRepresentanteDTO } from "../dtos/ICreateRepresentanteDTO";
import { IUpdateRepresentanteDTO } from "../dtos/IUpdateRepresentanteDTO";
import { IRepresentanteRepository } from "../interfaces/IRepresentanteRepository";
import { AppDataSource } from "../../../../shared/database/data-source";


class RepresentanteRepository implements IRepresentanteRepository {
    
    private repository: Repository<Representante>;

    constructor() {
        this.repository = AppDataSource.getRepository(Representante);
    }
        async create({ nome, email, telefone, cnpj, idUsuario }: ICreateRepresentanteDTO): Promise<Representante> {
        
        const representante = this.repository.create({
            nome, 
            email, 
            telefone,
            cnpj,
            idUsuario
        });

        await this.repository.save(representante);

        return representante
    }
    
    async list(): Promise<Representante[]> {
        
        const representantes = await this.repository.find();

        return representantes;
    }

    async findRepresentanteByCpf(cpfRepresentante: string): Promise<Representante> {
        const representante = await this.repository.findOne({ where: { cpfRepresentante } });

        return representante;
    }

    async findRepresentanteByNome(nome: string): Promise<Representante> {
        const representante = await this.repository.findOne({ where: { nome } });

        return representante;
    }

    async updateRepresentante(cpfRepresentante: string, { email, telefone, cnpj, idUsuario}: IUpdateRepresentanteDTO): Promise<Representante> {
        const representante = await this.repository.findOne({ where: { cpfRepresentante } });

        if (representante) {
            representante.email = email ? email  : representante.email;
            representante.telefone = telefone ? telefone : representante.telefone;
            representante.cnpj = cnpj ? cnpj : representante.cnpj;
            representante.idUsuario = idUsuario ? idUsuario : representante.idUsuario;
    
            await this.repository.save(representante);

            return representante;
        }
    }

    async deleteRepresentante(cpfRepresentante: string): Promise<Representante> {
        
        const representante = await this.repository.findOne({ where: { cpfRepresentante } });

        if(representante) {
            await this.repository.remove(representante);
            return representante;
        }
    }
}

export { RepresentanteRepository };