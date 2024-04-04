import { Repository } from "typeorm";
import { ISalasRepository } from "../interfaces/ISalasRepository";
import { Salas } from "../../entities/Salas";
import { AppDataSource } from "../../../../shared/database/data-source";
import { ICreateSalasDTO } from "../dtos/ICreateSalasDTO";

class SalasRepository implements ISalasRepository {

    private repository: Repository<Salas>;

    constructor() {
        this.repository = AppDataSource.getRepository(Salas);
    }

    async create({ 
        nome, 
        qtdPessoas, 
        obs, 
        StatusSalas_idStatus1, 
        TipoSalas_idTipoSalas1 }: ICreateSalasDTO): Promise<Salas> {

            const salas = this.repository.create({
                nome, 
                qtdPessoas, 
                obs, 
                StatusSalas_idStatus1, 
                TipoSalas_idTipoSalas1,
            });

            await this.repository.save(salas);

            return salas;
    }

    async list(): Promise<Salas[]> {

        const salasAll = await this.repository.find();

        return salasAll;
    }

    async findById(idSala: number): Promise<Salas> {

        const salasFound = await this.repository.findOne({ where: { idSala }});

        return salasFound;
        
    }

    async update(
        idSala: number, 
        nome: string,
        qtdPessoas: number, 
        obs: string, 
        StatusSalas_idStatus1: number, 
        TipoSalas_idTipoSalas1: number): Promise<Salas> {

            const salasUpdate = await this.repository.findOne({ where: { idSala }});

            if (salasUpdate) {
                salasUpdate.nome = nome ? nome : salasUpdate.nome;
                salasUpdate.qtdPessoas = qtdPessoas ? qtdPessoas : salasUpdate.qtdPessoas;
                salasUpdate.obs = obs ? obs : salasUpdate.obs;
                salasUpdate.StatusSalas_idStatus1 = StatusSalas_idStatus1 ? StatusSalas_idStatus1 : salasUpdate.StatusSalas_idStatus1;
                salasUpdate.TipoSalas_idTipoSalas1 = TipoSalas_idTipoSalas1 ? TipoSalas_idTipoSalas1 : salasUpdate.TipoSalas_idTipoSalas1;
                salasUpdate.dataAtualizacao = new Date();

                await this.repository.save(salasUpdate);

                return salasUpdate;
            }
    }

    async delete(idSala: number) {

        const salasDelete = await this.repository.findOne({ where: {idSala }});

        if (salasDelete){
            await this.repository.remove(salasDelete);
            return salasDelete;
        }
    }
}

export { SalasRepository };