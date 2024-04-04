import { TipoAutorizacao } from "../../entities/TipoAutorizacao";
import { ICreateTipoAutorizacaoDTO } from "../dtos/ICreateTipoAutorizacaoDTO";

interface ITipoAutorizacaoRepository {
   
    create ({ tipoAutorizacao}: ICreateTipoAutorizacaoDTO): Promise<TipoAutorizacao>;

    list(): Promise<TipoAutorizacao[]>;

    findById (idTipoAutorizacao: number): Promise<TipoAutorizacao>;

    update (idTipoAutorizacao: number, tipoAutorizacao: string): Promise<TipoAutorizacao>;

    delete (idTipoAutorizacao: number): Promise<TipoAutorizacao>;


}

export { ITipoAutorizacaoRepository};