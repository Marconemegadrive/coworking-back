import { Salas } from "../../entities/Salas";
import { ICreateSalasDTO } from "../dtos/ICreateSalasDTO";

interface ISalasRepository {

    create ({nome, qtdPessoas, obs, StatusSalas_idStatus1, TipoSalas_idTipoSalas1 }: ICreateSalasDTO): Promise<Salas>;

    list(): Promise<Salas[]>;

    findById(idSala: number): Promise<Salas>;

    update(
        idSala: number, 
        nome: string,
        qtdPessoas: number, 
        obs: string, 
        StatusSalas_idStatus1: number, 
        TipoSalas_idTipoSalas1: number): Promise<Salas>;

    delete(idSala: number): Promise<Salas>;
}

export { ISalasRepository };