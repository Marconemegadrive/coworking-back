import { Endereco } from "../../entities/Endereco";
import { ICreateEnderecoDTO } from "../dtos/ICreateEnderecoDTO";
import { IUpdateEnderecoDTO } from "../dtos/IUpdateEnderecoDTO";

interface IEnderecoRepository {

    create({ uf, cep, cidade, bairro, rua, numero, complemento, obs, cliente_idCliente }: ICreateEnderecoDTO): Promise<Endereco>;
    
    list(): Promise<Endereco[]>;

    findByIdCliente(cliente_idCliente: number): Promise<Endereco>;

    update(cliente_idCliente: number, { uf, cep, cidade, bairro, rua, numero, complemento, obs }: IUpdateEnderecoDTO): Promise<Endereco>;

    delete(cliente_idCliente: number): Promise<Endereco>;
}

export { IEnderecoRepository };