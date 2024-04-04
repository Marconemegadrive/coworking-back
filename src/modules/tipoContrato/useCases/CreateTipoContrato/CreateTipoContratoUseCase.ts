import { inject, injectable } from "tsyringe";
import { ITipoContratoRepository } from "../../repositories/interfaces/ITipoContratoRepository";
import { TipoContrato } from "../../entities/TipoContrato";
import { ICreateTipoContratoDTO } from "../../repositories/dtos/ICreateTipoContratoDTO";

@injectable()
class CreateTipoContratoUseCase {

    constructor(
        @inject("TipoContratoRepository")
        private tipoContratoRepository: ITipoContratoRepository
    ) {}
    
    async execute({ idTipoContrato, descricao }: ICreateTipoContratoDTO): Promise<TipoContrato> {
        
        //TO-DO fazer validação
        //const tipoContratoExists = await this.tipoContratoRepository.findById(id);

        const tipoContrato = await this.tipoContratoRepository.create({
            idTipoContrato,
            descricao
        });

        return tipoContrato;
    }  
}

export { CreateTipoContratoUseCase };