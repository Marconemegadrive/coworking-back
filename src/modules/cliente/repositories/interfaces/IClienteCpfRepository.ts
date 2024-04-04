import { ClienteCpf } from "../../entities/ClienteCpf";
import { ICreateClienteCpfDTO } from "../dtos/ICreateClienteCpfDTO";

 
interface IClienteCpfRepository {

    create({ cpf, nome, dataNasc, Cliente_idCliente, usuario_idUsuario }: ICreateClienteCpfDTO): Promise<ClienteCpf>;

    list(): Promise<ClienteCpf[]>

    findByCpf(cpf: string): Promise<ClienteCpf>;

    delete(cpf: string): Promise<ClienteCpf>;
}

export { IClienteCpfRepository };