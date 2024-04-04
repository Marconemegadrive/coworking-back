import { inject, injectable } from "tsyringe";
import { IEncomendaRepository } from "../../repositories/interfaces/IEncomendaRepository";
import { Encomenda } from "../../entities/Encomenda";
import { AppError } from "../../../../shared/errors/AppError";
import { IUpdateEncomendaDTO } from "../../repositories/dtos/IUpdateEncomendaDTO";

@injectable()
export class UpdateEncomendaByIdUseCase {

    constructor(
        @inject("EncomendaRepository")
        private encomendaRepository: IEncomendaRepository
    ) { }

    async execute(idEncomenda: number, { obsEncomenda, idEndFiscal, idCliente }: IUpdateEncomendaDTO): Promise<Encomenda> {

        const encomendaExist = await this.encomendaRepository.findEncomendaById(idEncomenda);

        if (!encomendaExist) {
            throw new AppError("Encomenda inexistente!");
        }

        const encomendaUpdated = await this.encomendaRepository.updateEncomenda(idEncomenda, {
            obsEncomenda,
            idEndFiscal,
            idCliente
        });
        return encomendaUpdated;
    }
}
