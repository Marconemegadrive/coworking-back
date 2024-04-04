import { Telefone } from "../../entities/Telefone";
import { ICreateTelefoneDTO } from "../dtos/ICreateTelefoneDTO";

interface ITelefoneRepository {

    create({ telefone, Cliente_idCliente, Funcionario_cpf1 }: ICreateTelefoneDTO): Promise<Telefone>;

    list(): Promise<Telefone[]>;

    findByIdCliente(idCliente: number): Promise<Telefone>;

    findByCpfFuncionario(cpfFuncionario: string): Promise<Telefone>;

    findById(idTelefone: number): Promise<Telefone>;

    update(idTelefone: number, telefone: string): Promise<Telefone>;

    delete(idTelefone: number): Promise<Telefone>;
}

export { ITelefoneRepository };