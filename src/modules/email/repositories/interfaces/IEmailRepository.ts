import { ICreateEmailDTO } from "../dtos/ICreateEmailDTO";
import { Email } from "../../entities/Email";

interface IEmailRepository {

    create({ email, Cliente_idCliente, Funcionario_cpf }: ICreateEmailDTO): Promise<Email>;

    list(): Promise<Email[]>;

    findByIdCliente(Cliente_idCliente: number): Promise<Email>;

    findByCpfFuncionario(Funcionario_cpf: string): Promise<Email>;

    update(idEmail: number, email: string): Promise<Email>;

    delete(idEmail: number): Promise<Email>;
}

export { IEmailRepository };