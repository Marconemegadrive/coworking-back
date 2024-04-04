import { ICreateTipoSalasDTO } from "../dtos/ICreateTipoSalasDTO";
import { TipoSalas } from "../../entities/TipoSalas";

interface ITipoSalasRepository {
    
    create ({ tipoSalas}: ICreateTipoSalasDTO): Promise<TipoSalas>;

    list(): Promise<TipoSalas[]>;

    findById (id: number): Promise<TipoSalas>;

    update (id: number, tipoSalas: string): Promise<TipoSalas>;

    delete (id: number): Promise<TipoSalas>;


}

export { ITipoSalasRepository };