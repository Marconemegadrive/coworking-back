import { inject, injectable } from "tsyringe";
import { RecebimentoEncomenda } from "../../entities/RecebimentoEncomenda";
import { ICreateRecebimentoEncomendaDTO } from "../../repositories/dtos/ICreateRecebimentoEncomendaDTO";
import { IRecebimentoEncomendaRepository } from "../../repositories/interfaces/IRecebimentoEncomendaRepository";
import { AppError } from "../../../../shared/errors/AppError";

@injectable()
class CreateRecebimentoEncomendaUseCase {

    constructor(
        @inject("REcebimentoEncomendaRepository")
        private recebimentoEncomendaRepository: IRecebimentoEncomendaRepository
    ) {}

    async execute( { obsRecEncomenda, idEncomenda }: ICreateRecebimentoEncomendaDTO): Promise<RecebimentoEncomenda> {

        const recebimentoEncomendaExists = await this.recebimentoEncomendaRepository.findRecebimentoEncomendaByIdEncomenda(idEncomenda);
        
        if(recebimentoEncomendaExists) {
            throw new AppError("Encomenda já existente!");  
        }

        const recebimentoEncomenda = await this.recebimentoEncomendaRepository.create({
              obsRecEncomenda,
              idEncomenda
            
                      });

        return recebimentoEncomenda;
    }
}

export { CreateRecebimentoEncomendaUseCase }