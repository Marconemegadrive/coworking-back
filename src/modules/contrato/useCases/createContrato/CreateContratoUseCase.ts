import { inject, injectable } from "tsyringe";
import { Contrato } from "../../entities/Contrato";
import { ICreateContratoDTO } from "../../repositories/dtos/ICreateContratoDTO";
import { IContratoRepository } from "../../repositories/interfaces/IContratoRepository";
import { AppError } from "../../../../shared/errors/AppError";


@injectable()
class CreateContratoUseCase {

    constructor(
        @inject("ContratoRepository")
        private contratoRepository: IContratoRepository
    ) {}

    async execute({ dataInicio, dataFinal, valor, horaSR, horaSC, qtdBaias, salaTrab,
        tipocontrato_idTipoContrato, cliente_idCliente }: ICreateContratoDTO): Promise<Contrato> {

            //TODO: como será a validação de contrato?

            
            const contrato = await this.contratoRepository.create({
                dataInicio,
                dataFinal,
                valor,
                horaSR,
                horaSC,
                qtdBaias,
                salaTrab,
                tipocontrato_idTipoContrato,
                cliente_idCliente
            });

            return contrato;
        }
}

export { CreateContratoUseCase };