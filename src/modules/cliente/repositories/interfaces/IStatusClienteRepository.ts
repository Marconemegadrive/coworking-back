import { StatusCliente } from "../../entities/StatusCliente";

interface IStatusClienteRepository {

    create(tipo: string): Promise<StatusCliente>;

    list(): Promise<StatusCliente[]>;

    findById(idStatus: number): Promise<StatusCliente>;

    update(idStatus: number, tipo: string): Promise<StatusCliente>;

    delete(idStatus: number): Promise<StatusCliente>;
}

export { IStatusClienteRepository };