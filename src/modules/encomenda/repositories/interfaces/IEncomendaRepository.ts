import { Encomenda } from "../../entities/Encomenda"
import { IUpdateEncomendaDTO } from "../dtos/IUpdateEncomendaDTO";
import { ICreateEncomendaDTO } from "../dtos/ICreateEncomendaDTO";

export interface IEncomendaRepository {
    
    create({ 
        obsEncomenda, 
        idEndFiscal, 
        idCliente
    }: ICreateEncomendaDTO): Promise <Encomenda>;

    list(): Promise<Encomenda[]>;

    findEncomendaById(idEncomenda: number): Promise<Encomenda>;

    findEncomendaByIdCliente(idCliente: number): Promise<Encomenda>;

    updateEncomenda(idEncomenda: number, { obsEncomenda, idEndFiscal, idCliente}: IUpdateEncomendaDTO):Promise<Encomenda>;

    deleteEncomenda(idEncomenda: number): Promise<Encomenda>;

}

