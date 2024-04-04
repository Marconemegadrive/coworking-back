import { inject, injectable } from "tsyringe";
import { Encomenda } from "../../entities/Encomenda";
import { ICreateEncomendaDTO } from "../../repositories/dtos/ICreateEncomendaDTO";
import { IEncomendaRepository } from "../../repositories/interfaces/IEncomendaRepository";
import { AppError } from "../../../../shared/errors/AppError";

@injectable()
export class CreateEncomendaUseCase {

    constructor(
        @inject("EncomendaRepository")
        private encomendaRepository: IEncomendaRepository
    ) {}

    async execute( { obsEncomenda, idEndFiscal, idCliente}: ICreateEncomendaDTO): Promise<Encomenda> {

        const encomendaExists = await this.encomendaRepository.findEncomendaByIdCliente(idCliente);
        
        if(encomendaExists) {
            throw new AppError("Encomenda já existente!");  
        }

        const encomenda = await this.encomendaRepository.create({
              obsEncomenda,
              idEndFiscal,
              idCliente
        });

        return encomenda;
    }
}

