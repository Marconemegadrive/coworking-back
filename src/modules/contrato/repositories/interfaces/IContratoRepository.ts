import { Contrato } from "../../entities/Contrato";
import { ICreateContratoDTO } from "../dtos/ICreateContratoDTO";
import { IUpdateContratoDTO } from "../dtos/UpdateContratoDTO";

interface IContratoRepository {

    create({
        dataInicio,
        dataFinal,
        valor,
        horaSR,
        horaSC,
        qtdBaias,
        salaTrab,
        tipocontrato_idTipoContrato,
        cliente_idCliente
    }: ICreateContratoDTO): Promise<Contrato>;

    list(): Promise<Contrato[]>;

    findById(idContrato: number): Promise<Contrato>;

    update(idContrato: number, { dataInicio,
        dataFinal, valor, horaSR, horaSC, qtdBaias, 
        salaTrab, dataAtualizacao}: IUpdateContratoDTO): Promise<Contrato>;

    delete(idContrato: number): Promise<Contrato>;
}

export { IContratoRepository };