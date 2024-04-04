import { Repository } from "typeorm";
import { Testemunha} from "../../entities/Testemunha";
import { ITestemunhaRepository } from "../interfaces/ITestemunhaRepository";
import { ICreateTestemunhaDTO } from "../dtos/ICreateTestemunhaDTO";
import { AppDataSource } from "../../../../shared/database/data-source";

class TestemunhaRepository implements ITestemunhaRepository {

    private repository: Repository<Testemunha>;

    constructor() {
        this.repository = AppDataSource.getRepository(Testemunha);
    }

    async create({ nome, cpf }: ICreateTestemunhaDTO): Promise<Testemunha> {
        
        const testemunhaCreated = this.repository.create({
            nome, 
            cpf
        });
        await this.repository.save(testemunhaCreated);
        
        return testemunhaCreated;

    }
    async list(): Promise<Testemunha[]> {

        const testemunhasAll = await this.repository.find();

        return testemunhasAll;
    }

    async findById(idTestemunha: number): Promise<Testemunha> {
        
        const testemunhaFound = await this.repository.findOne({ where: { idTestemunha } });

        return testemunhaFound;
    }

    async delete(idTestemunha: number): Promise<Testemunha> {

        const testemunhaDeleted = await this.repository.findOne({ where: { idTestemunha } });

        if(testemunhaDeleted) {
            await this.repository.remove(testemunhaDeleted)
            return testemunhaDeleted;
        }
    }
}

export { TestemunhaRepository };
