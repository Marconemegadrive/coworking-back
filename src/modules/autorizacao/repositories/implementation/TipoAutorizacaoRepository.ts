import { Repository } from "typeorm";
import { ITipoAutorizacaoRepository } from "../interfaces/ITipoAutorizacaoRepository";
import { AppDataSource } from "../../../../shared/database/data-source";
import { TipoAutorizacao } from "../../entities/TipoAutorizacao";
import { ICreateTipoAutorizacaoDTO } from "../dtos/ICreateTipoAutorizacaoDTO";

class TipoAutorizacaoRepository implements ITipoAutorizacaoRepository {

    private repository : Repository<TipoAutorizacao>;

    constructor() {
        this.repository = AppDataSource.getRepository(TipoAutorizacao);
    }
    
    async create({ tipoAutorizacao }: ICreateTipoAutorizacaoDTO): Promise<TipoAutorizacao> {
        
        const tipo_Autorizacao = this.repository.create({
            tipoAutorizacao,
        });

        await this.repository.save(tipo_Autorizacao);

        return tipo_Autorizacao;
    }

    
    async list(): Promise<TipoAutorizacao[]> {
        
        const tipoAutorizacao = await this.repository.find();

        return tipoAutorizacao;
        
    }

    async findById(idTipoAutorizacao: number): Promise<TipoAutorizacao> {

        const tipoAutorizacao = await this.repository.findOne({ where: { idtipoAutorizacao: idTipoAutorizacao }});

        return tipoAutorizacao;
        
    }
    
    async update(idTipoAutorizacao: number, tipoAutorizacao:string): Promise<TipoAutorizacao> {

        const tipoAutorizacaoUpdated = await this.repository.findOne({ where: { idtipoAutorizacao: idTipoAutorizacao }});

        if (tipoAutorizacaoUpdated) {
            tipoAutorizacaoUpdated.tipoAutorizacao = tipoAutorizacao ? tipoAutorizacao : tipoAutorizacaoUpdated.tipoAutorizacao;

            await this.repository.save(tipoAutorizacaoUpdated);

            return tipoAutorizacaoUpdated;
        }
    }

    async delete(idTipoAutorizacao: number): Promise<TipoAutorizacao> {

        const tipoAutorizacaoDeleted = await this.repository.findOne({ where: { idtipoAutorizacao: idTipoAutorizacao} });

        if(tipoAutorizacaoDeleted){
            await this.repository.remove(tipoAutorizacaoDeleted);
            return tipoAutorizacaoDeleted;
        }

}

}
export { TipoAutorizacaoRepository};