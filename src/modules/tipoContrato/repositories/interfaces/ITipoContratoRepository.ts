import { TipoContrato } from "../../entities/TipoContrato";
import { ICreateTipoContratoDTO } from "../dtos/ICreateTipoContratoDTO";
import { IUpdateTipoContratoDTO } from "../dtos/IUpdateTipoContratoDTO";

interface ITipoContratoRepository {

    create({
        idTipoContrato,
        descricao
    }: ICreateTipoContratoDTO): Promise<TipoContrato>;

    list(): Promise<TipoContrato[]>;

    findById(idTipoContrato: number): Promise<TipoContrato>;

    update(idTipoContrato: number, { descricao }: IUpdateTipoContratoDTO): Promise<TipoContrato>;

    delete(idTipoContrato: number): Promise<TipoContrato>;
}

export { ITipoContratoRepository };