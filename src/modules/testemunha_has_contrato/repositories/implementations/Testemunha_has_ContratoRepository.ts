import { Repository } from "typeorm";
import { AppDataSource } from "../../../../shared/database/data-source";
import { Testemunha_has_Contrato } from "../../entities/Testemunha_has_Contrato";
import { ITestemunha_has_ContratoRepository } from "../interfaces/ITestemunha_has_ContratoRepository";
import { ICreateTestemunha_has_ContratoDTO } from "../dtos/ICreateTestemunha_has_ContratoDTO";
import { AppError } from "../../../../shared/errors/AppError";


class Testemunha_has_ContratoRepository implements ITestemunha_has_ContratoRepository {

    private repository: Repository<Testemunha_has_Contrato>;

    constructor() {
        this.repository = AppDataSource.getRepository(Testemunha_has_Contrato);
    }

    async create({ Testemunha_idTestemunha, Contrato_idContrato }: ICreateTestemunha_has_ContratoDTO): Promise<Testemunha_has_Contrato> {

        const testemunha_has_ContratoAlreadyExists = await this.repository.findOne({ where: { Testemunha_idTestemunha, Contrato_idContrato } });
    
        if (testemunha_has_ContratoAlreadyExists) {
            throw new AppError('Testemunha já cadastrada para este contrato.');
        }
    
        const testemunha_has_ContratoCreated = this.repository.create({
            Testemunha_idTestemunha,
            Contrato_idContrato
        });
    
        await this.repository.save(testemunha_has_ContratoCreated);
    
        return testemunha_has_ContratoCreated;
    }

    async list(): Promise<Testemunha_has_Contrato[]> {
        
        const testemunhas_AllContracts = await this.repository.find();
        
        return testemunhas_AllContracts;
    }

    async findById(Testemunha_idTestemunha: number): Promise<Testemunha_has_Contrato[]> {

        const testemunha_has_ContratoFound = await this.repository.find({ where: { Testemunha_idTestemunha } });

        return testemunha_has_ContratoFound;
    }

    async delete(Testemunha_idTestemunha: number, Contrato_idContrato: number): Promise<Testemunha_has_Contrato> {

        const entryToDelete = await this.repository.findOne({ where: { Testemunha_idTestemunha, Contrato_idContrato } });

        if (!entryToDelete) {
            throw new AppError('Não foi encontrada uma entrada com os IDs fornecidos.');
        }

        await this.repository.remove(entryToDelete);
        return entryToDelete;
    }
}

export { Testemunha_has_ContratoRepository };