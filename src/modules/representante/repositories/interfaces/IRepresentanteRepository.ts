import { Representante } from "../../entities/Representante"
import { IUpdateRepresentanteDTO } from "../dtos/IUpdateRepresentanteDTO";
import { ICreateRepresentanteDTO } from "../dtos/ICreateRepresentanteDTO";

interface IRepresentanteRepository {
    
    create({ 
        nome, 
        email, 
        telefone,
        cnpj,
        idUsuario
    }: ICreateRepresentanteDTO): Promise <Representante>;

    list(): Promise<Representante[]>;

    findRepresentanteByCpf(cpfRepresentante: string): Promise<Representante>;

    findRepresentanteByNome(nome: string): Promise<Representante>;

    updateRepresentante(cpfRepresentnte: string, { nome, email, telefone, cnpj, idUsuario }: IUpdateRepresentanteDTO):Promise<Representante>;

    deleteRepresentante(cpfRepresentante: string): Promise<Representante>;

}

export { IRepresentanteRepository };