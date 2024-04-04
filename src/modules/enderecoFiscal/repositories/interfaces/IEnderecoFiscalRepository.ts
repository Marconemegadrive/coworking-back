import { EnderecoFiscal} from "../../entities/EnderecoFiscal"
import { IUpdateEnderecoFiscalDTO } from "../dtos/IUpdateEnderecoFiscalDTO";
import { ICreateEnderecoFiscalDTO } from "../dtos/ICreateEnderecoFiscalDTO";

interface IEnderecoFiscalRepository {
    
    create({ 
        statusEndFiscal,
        cliente_idCliente
    }: ICreateEnderecoFiscalDTO): Promise <EnderecoFiscal>;

    list(): Promise<EnderecoFiscal[]>;

    findEnderecoFiscalById(idEndFiscal: number): Promise<EnderecoFiscal>;

    findEnderecoFiscalByIdCliente(idCliente: number): Promise<EnderecoFiscal>;

    //findEnderecoFiscalystatusEndFiscal(idCliente: number): Promise<EnderecoFiscal>;

    updateEnderecoFiscal(idEndFiscal: number, { statusEndFiscal, idCliente}: IUpdateEnderecoFiscalDTO):Promise<EnderecoFiscal>;

    deleteEnderecoFiscal(idEndFiscal: number): Promise<EnderecoFiscal>;

}

export { IEnderecoFiscalRepository };