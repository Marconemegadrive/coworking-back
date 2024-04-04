import { IUpdateRetiradaEncomendaDTO } from "../dtos/IUpdateRetiradaEncomendaDTO";
import { ICreateRetiradaEncomendaDTO } from "../dtos/ICreateRetiradaEncomendaDTO";
import { RetiradaEncomenda } from "../../entities/RetiradaEncomenda";

export interface IRetiradaEncomendaRepository {
    
    create({ 
        obsRetEncomenda, 
        idEncomenda

    }: ICreateRetiradaEncomendaDTO): Promise <RetiradaEncomenda>;

    list(): Promise<RetiradaEncomenda[]>;

    findRetiradaEncomendaById(idRetiradaEncomenda: number): Promise<RetiradaEncomenda>;

    findRetiradaEncomendaByIdEncomenda(idEncomenda: number): Promise<RetiradaEncomenda>;

    updateRetiradaEncomenda(idRetiradaEncomenda: number, { obsRetEncomenda, idEncomenda}: IUpdateRetiradaEncomendaDTO):Promise<RetiradaEncomenda>;

    deleteRetiradaEncomenda(idRetiradaEncomenda: number): Promise<RetiradaEncomenda>;

}
