import { injectable, inject } from "tsyringe";
import { ISalasRepository } from "../../repositories/interfaces/ISalasRepository";
import { ICreateSalasDTO } from "../../repositories/dtos/ICreateSalasDTO";
import { Salas } from "../../entities/Salas";

@injectable()
class CreateSalasUseCase {
    constructor(
        @inject("SalasRepository")
        private salasRepository: ISalasRepository
    ) {}

    async execute({
        nome, 
        qtdPessoas, 
        obs, 
        StatusSalas_idStatus1, 
        TipoSalas_idTipoSalas1 }: ICreateSalasDTO): Promise<Salas>{

            const salasCreated = await this.salasRepository.create({
                nome, 
                qtdPessoas, 
                obs, 
                StatusSalas_idStatus1, 
                TipoSalas_idTipoSalas1,
            });

            return salasCreated;
        }
}

export { CreateSalasUseCase };