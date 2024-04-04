import { StatusSalas } from "../../entities/StatusSalas";
import { ICreateStatusSalasDTO } from "../dtos/ICreateStatusSalasDTO";

interface IStatusSalasRepository {

    create ({statusSalas}: ICreateStatusSalasDTO): Promise<StatusSalas>;
    
    list(): Promise<StatusSalas[]>;
    
    findById(idStatus: Number): unknown;

    update(id: number, statusSalas: string): Promise<StatusSalas>;

    delete(id: number): Promise<StatusSalas>;

    

}

export { IStatusSalasRepository};