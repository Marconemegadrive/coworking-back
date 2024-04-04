import { inject, injectable } from "tsyringe";
import { ISalasRepository } from "../../repositories/interfaces/ISalasRepository";
import { Salas } from "../../entities/Salas";

@injectable()
class ListSalasUseCase {

    constructor(
        @inject("SalasRepository")
        private salasRepository: ISalasRepository
    ){}

    async execute(): Promise<Salas[]> {

        const salasAll = await this.salasRepository.list();

        return salasAll;
    }
}

export { ListSalasUseCase };