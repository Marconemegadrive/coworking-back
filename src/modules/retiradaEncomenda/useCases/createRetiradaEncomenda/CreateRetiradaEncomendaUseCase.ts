import { inject, injectable } from "tsyringe";
import { RetiradaEncomenda } from "../../entities/RetiradaEncomenda";
import { ICreateRetiradaEncomendaDTO } from "../../repositories/dtos/ICreateRetiradaEncomendaDTO";
import { IRetiradaEncomendaRepository } from "../../repositories/interfaces/IRetiradaEncomendaRepository";
import { AppError } from "../../../../shared/errors/AppError";

@injectable()
export class CreateRetiradaEncomendaUseCase {

    constructor(
        @inject("RetiradaEncomendaRepository")
        private retiradaEncomendaRepository: IRetiradaEncomendaRepository
    ) {}

    async execute( { obsRetEncomenda, idEncomenda }: ICreateRetiradaEncomendaDTO): Promise<RetiradaEncomenda> {

        const retiradaEncomendaExists = await this.retiradaEncomendaRepository.findRetiradaEncomendaByIdEncomenda(idEncomenda);
        
        if(retiradaEncomendaExists) {
            throw new AppError("Retirada Encomenda já existente!");  
        }

        const retiradaEncomenda = await this.retiradaEncomendaRepository.create({
              obsRetEncomenda,
              idEncomenda
            
                      });

        return retiradaEncomenda;
    }
}

