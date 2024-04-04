import { IUpdateRecebimentoEncomendaDTO } from "../dtos/IUpdateRecebimentoEncomendaDTO";
import { ICreateRecebimentoEncomendaDTO } from "../dtos/ICreateRecebimentoEncomendaDTO";
import { RecebimentoEncomenda } from "../../entities/RecebimentoEncomenda";

interface IRecebimentoEncomendaRepository {
    
    create({ 
        obsRecEncomenda, 
        idEncomenda, 
        dataHora
    }: ICreateRecebimentoEncomendaDTO): Promise <RecebimentoEncomenda>;

    list(): Promise<RecebimentoEncomenda[]>;

    findRecebimentoEncomendaById(idRecebimentoEncomenda: number): Promise<RecebimentoEncomenda>;

    findRecebimentoEncomendaByIdEncomenda(idEncomenda: number): Promise<RecebimentoEncomenda>;

    updateRecebimentoEncomenda(idRecebimentoEncomenda: number, { obsRecEncomenda, dataHora, idEncomenda}: IUpdateRecebimentoEncomendaDTO):Promise<Encomenda>;

    deleteRecebimentoEncomenda(idRecebimentoEncomenda: number): Promise<RecebimentoEncomenda>;

}

export { IRecebimentoEncomendaRepository };