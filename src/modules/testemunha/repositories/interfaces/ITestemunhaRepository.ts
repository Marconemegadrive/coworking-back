import { Testemunha } from "../../entities/Testemunha";
import { ICreateTestemunhaDTO } from "../dtos/ICreateTestemunhaDTO";

interface ITestemunhaRepository {
    
    create({ nome, cpf }: ICreateTestemunhaDTO): Promise<Testemunha>;
    
    list(): Promise<Testemunha[]>;
    
    findById(idTestemunha: number): Promise<Testemunha>;

    delete(idTestemunha: number): Promise<Testemunha>;
}

export { ITestemunhaRepository };