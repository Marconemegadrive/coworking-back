import { NivelAcesso } from "../../entities/NivelAcesso";
import { IUpdateNivelAcessoDTO } from "../dtos/IUpdateNivelAcessoDTO";
import { ICreateNivelAcessoDTO } from "../dtos/ICreateNivelAcessoDTO";


// As nossas interfaces tem nível um pouco mais baixo ou abstrato do nosso Repository, uma interface nada mais é do que um contrato que define comportamentos e informações para resolver um ponto específico, um contexto menor com o foco em mapear recursos necessários para algo sem uma implementação em si. E que podemos utilizar como abstração em outras camadas do nosso projeto. Dessa forma, não ficamos presos as implementações do repositório.
interface INivelAcessoRepository {

    // Implementação do método criar, ele servirá para criar um registro de Nível de acesso no nosso banco de dados
    create({ nome, nivel }: ICreateNivelAcessoDTO): Promise<NivelAcesso>;

    list(): Promise<NivelAcesso[]>;

    findById(idAcesso: number): Promise<NivelAcesso>;

    update(idAcesso: number, { nome, nivel }: IUpdateNivelAcessoDTO): Promise<NivelAcesso>;

    delete(idAcesso: number): Promise<NivelAcesso>;
}

export { INivelAcessoRepository };