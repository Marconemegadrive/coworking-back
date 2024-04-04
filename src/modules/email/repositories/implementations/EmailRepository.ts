import { Repository } from "typeorm";
import { Email } from "../../entities/Email";
import { AppDataSource } from "../../../../shared/database/data-source";
import { IEmailRepository } from "../interfaces/IEmailRepository";
import { ICreateEmailDTO } from "../dtos/ICreateEmailDTO";

class EmailRepository implements IEmailRepository{

    private repository: Repository<Email>

    constructor() {
        this.repository = AppDataSource.getRepository(Email);
    }

    async create({ email, Cliente_idCliente, Funcionario_cpf }: ICreateEmailDTO): Promise<Email> {
        
        const emailCreated = this.repository.create({
            email,
            Cliente_idCliente,
            Funcionario_cpf
        });

        await this.repository.save(emailCreated);

        return emailCreated;
    }

    async list(): Promise<Email[]> {
        
        const emailsAll = await this.repository.find();

        return emailsAll;
    }

    async findByIdCliente(Cliente_idCliente: number): Promise<Email> {
        
        const emailFound = await this.repository.findOne({ where: { Cliente_idCliente } });

        return emailFound;
    }

    async findByCpfFuncionario(Funcionario_cpf: string): Promise<Email> {
        
        const emailFound = await this.repository.findOne({ where: { Funcionario_cpf } });

        return emailFound;
    }

    async update(idEmail: number, email: string): Promise<Email> {
        
        const emailUpdate = await this.repository.findOne({ where: { idEmail } });

        if (emailUpdate) {
            emailUpdate.email = email ? email : emailUpdate.email;

            await this.repository.save(emailUpdate);
            return emailUpdate;
        }
    }

    async delete(idEmail: number): Promise<Email> {
        
        const emailDeleted = await this.repository.findOne({ where: { idEmail } });

        if (emailDeleted) {
            
            await this.repository.remove(emailDeleted);

            return emailDeleted;
        }
    }
}

export { EmailRepository };