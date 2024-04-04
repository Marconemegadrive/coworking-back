import { injectable, inject } from "tsyringe";
import { ISalasRepository } from "../../repositories/interfaces/ISalasRepository";
import { AppError } from "../../../../shared/errors/AppError";
import { Salas } from "../../entities/Salas";


@injectable()
class UpdateSalasUseCase {

    constructor(
        @inject("SalasRepository")
        private salasRepository: ISalasRepository
    ){}

    async execute(
        idSala: number, 
        nome: string, 
        qtdPessoas: number, 
        obs: string,
        StatusSalas_idStatus1: number,
        TipoSalas_idTipoSalas1: number): Promise<Salas> {

            const salasFound = await this.salasRepository.findById(idSala);
            
            if(!salasFound) {
                throw new AppError("Sala não encontrada");
        }

        const salasUpdated = await this.salasRepository.update(
            idSala, nome, qtdPessoas, obs, StatusSalas_idStatus1, TipoSalas_idTipoSalas1);
        
        return salasUpdated;
    }
}

export { UpdateSalasUseCase };