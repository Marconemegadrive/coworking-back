import { ClientePj } from "../../entities/ClientePj";
import { ICreateClientePjDTO } from "../dtos/ICreateClientePjDTO";

interface IClientePjRepository {

    create({ cnpj, razaoSocial, nomeFantasia, dataFundacao, Cliente_idCliente }: ICreateClientePjDTO): Promise<ClientePj>;

    list(): Promise<ClientePj[]>;

    findByCnpj(cnpj: string): Promise<ClientePj>;

    delete(cnpj: string): Promise<ClientePj>;
}

export { IClientePjRepository };