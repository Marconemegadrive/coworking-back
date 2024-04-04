import { Repository } from "typeorm";
import { IAutorizacaoRepository } from "../interfaces/IAutorizacaoRepository";
import { Autorizacao } from "../../entities/Autorizacao";
import { AppDataSource } from "../../../../shared/database/data-source";
import { ICreateAutorizacaoDTO } from "../dtos/ICreateAutorizacaoDTO";

class AutorizacaoRepository implements IAutorizacaoRepository {

    private repository: Repository<Autorizacao>;

    constructor() {
        this.repository = AppDataSource.getRepository(Autorizacao);
    }

    async create({ obs, funcionario_cpf, tipoAutorizacao_idtipoAutorizacao }: ICreateAutorizacaoDTO): Promise<Autorizacao> {

        const autorizacao = this.repository.create({
            obs,
            funcionario_cpf,
            tipoAutorizacao_idtipoAutorizacao,
            dataCriacao : new Date(),

        });

        await this.repository.save(autorizacao);

        return autorizacao;
    }

    async list (): Promise<Autorizacao[]> {

        const autorizacaoAll = await this.repository.find();

        return autorizacaoAll;
    }

    async findById(idAutorizacao: number): Promise<Autorizacao> {
        
        const autorizacaoFound = await this.repository.findOne({ where: { idAutorizacao}})

        return autorizacaoFound;
    }

    async update(idAutorizacao: number, obs: string, funcionario_cpf: string, tipoAutorizacao_idtipoAutorizacao: number): Promise<Autorizacao> {

        const autorizacaoUpdated = await this.repository.findOne({ where: { idAutorizacao}});

        if(autorizacaoUpdated) {
            autorizacaoUpdated.obs = obs ? obs : autorizacaoUpdated.obs;
            autorizacaoUpdated.funcionario_cpf = funcionario_cpf ? funcionario_cpf : autorizacaoUpdated.funcionario_cpf;
            autorizacaoUpdated.tipoAutorizacao_idtipoAutorizacao = tipoAutorizacao_idtipoAutorizacao ? tipoAutorizacao_idtipoAutorizacao : autorizacaoUpdated.tipoAutorizacao.idtipoAutorizacao;
            autorizacaoUpdated.dataAtualizacao = new Date();

            await this.repository.save(autorizacaoUpdated);

            return autorizacaoUpdated;
        }
    }

    async delete (idAutorizacao : number) : Promise<Autorizacao> {

        const autorizacaoDelete = await this.repository.findOne({ where : { idAutorizacao }});

        if (autorizacaoDelete) {
            await this.repository.remove(autorizacaoDelete);
            return autorizacaoDelete;
        
        }
    }
}

export { AutorizacaoRepository };