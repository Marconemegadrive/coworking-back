import { Cliente } from "../../entities/Cliente";
import { ICreateClienteDTO } from "../dtos/ICreateClienteDTO";

interface IClienteRepository {

    create({ contrato, StatusCliente_idStatusCliente }: ICreateClienteDTO): Promise<Cliente>;

    list(): Promise<Cliente[]>;

    findById(idCliente: number): Promise<Cliente>;

    update(idCliente: number, contrato: string): Promise<Cliente>;

    delete(idCliente: number): Promise<Cliente>;
}

export { IClienteRepository };