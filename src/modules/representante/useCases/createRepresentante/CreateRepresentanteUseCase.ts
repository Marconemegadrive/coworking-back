import { inject, injectable } from "tsyringe";
import { Representante } from "../../entities/Representante";
import { ICreateRepresentanteDTO } from "../../repositories/dtos/ICreateRepresentanteDTO";
import { IRepresentanteRepository } from "../../repositories/interfaces/IRepresentanteRepository";
import { AppError } from "../../../../shared/errors/AppError";

@injectable()
class CreateRepresentanteUseCase {

    constructor(
        @inject("RepresentanteRepository")
        private representanteRepository: IRepresentanteRepository
    ) {}

    async execute( { nome, email, telefone, cnpj, idUsuario}: ICreateRepresentanteDTO): Promise<Representante> {

        const representanteExists = await this.representanteRepository.findRepresentanteByNome(nome);
        
        if(representanteExists) {
            throw new AppError("Representante já existente!");  
        }

        const representante = await this.representanteRepository.create({
            nome, 
            email, 
            telefone, 
            cnpj, 
            idUsuario
        });

        return representante;
    }
}

export { CreateRepresentanteUseCase }