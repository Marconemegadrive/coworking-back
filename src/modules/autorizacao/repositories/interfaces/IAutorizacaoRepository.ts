import { Autorizacao } from "../../entities/Autorizacao";
import { ICreateAutorizacaoDTO } from "../dtos/ICreateAutorizacaoDTO";


interface IAutorizacaoRepository {

    create({ 
        obs, 
        funcionario_cpf, 
        tipoAutorizacao_idtipoAutorizacao 
    
        }: ICreateAutorizacaoDTO): Promise<Autorizacao>;

    list(): Promise<Autorizacao[]>;

    findById(idAutorizacao: number): Promise<Autorizacao>;

    update(idAutorizacao: number, obs: string, funcionario_cpf: string, tipoAutorizacao_idtipoAutorizacao: number): Promise<Autorizacao>;

    delete(idAutorizacao: number): Promise<Autorizacao>;

}

export { IAutorizacaoRepository};