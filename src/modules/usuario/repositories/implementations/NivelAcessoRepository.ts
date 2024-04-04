import { Repository } from "typeorm";
import { NivelAcesso } from "../../entities/NivelAcesso";

import { INivelAcessoRepository } from "../interfaces/INivelAcessoRepository";
import { AppDataSource } from "../../../../shared/database/data-source";
import { ICreateNivelAcessoDTO } from "../dtos/ICreateNivelAcessoDTO";
import { IUpdateNivelAcessoDTO } from "../dtos/IUpdateNivelAcessoDTO";


// As implementações, como o próprio nome já diz, implementará nossa interface, desse modo, todos os métodos que fazem parte da interface, agora devem ser codificados de acordo com o ORM (Object Relational Mapper). Segregando as implementações das interfaces, facilmente podemos trocar de ORM ou modificar nossa implementação sem comprometer todas as outras camadas da aplicação, pois como podemos perceber, nos nossos casos de usos, entre outras partes da aplicação, sempre chamamos a interface e não a implementação.
class NivelAcessoRepository implements INivelAcessoRepository {
    
    private repository: Repository<NivelAcesso>;

    constructor() {
        this.repository = AppDataSource.getRepository(NivelAcesso);
    }

    // implementação do método que está setado na interface INivelAcessoRepository
    async create({ nome, nivel }: ICreateNivelAcessoDTO): Promise<NivelAcesso> {
        
        // Criamos um objeto nivelAcesso com os atributos que foram setados no nosso ICriarNivelACessoDTO, assim, os tipos e atributos que, necessariamente, serão utilizados são "forçados" em nossa interface DTO.
        const nivelAcesso = this.repository.create( {
            nome,
            nivel,
        } );

        // Após a criação do objetom utilizaremos o método .save() para realmente salvar nosso objeto nivelAcesso.
        await this.repository.save(nivelAcesso);

        // Agora retorna-se o objeto, exibindo-o para posteriores manipulações no back-end ou fronte.
        return nivelAcesso;
    }

    async list(): Promise<NivelAcesso[]> {
        
        const niveisAcessoAll = await this.repository.find();

        return niveisAcessoAll;
    }

    async findById(idAcesso: number): Promise<NivelAcesso> {
        
        const nivelAcesso = await this.repository.findOne({ where: { idAcesso } });

        return nivelAcesso;
    }

    async update(idAcesso: number, { nome, nivel }: IUpdateNivelAcessoDTO): Promise<NivelAcesso> {
        
        const nivelAcesso = await this.repository.findOne({ where: { idAcesso } });
        
        if (nivelAcesso) {
            nivelAcesso.nome = nome ? nome : nivelAcesso.nome;
            nivelAcesso.nivel = nivel ? nivel : nivelAcesso.nivel;

            await this.repository.save(nivelAcesso);

            return nivelAcesso;
        }
    }

    async delete(idAcesso: number): Promise<NivelAcesso> {
        
        const nivelAcesso = await this.repository.findOne({ where: { idAcesso } });

        if (nivelAcesso) {
            await this.repository.remove(nivelAcesso);
            return nivelAcesso;
        }
    }

}

export { NivelAcessoRepository };