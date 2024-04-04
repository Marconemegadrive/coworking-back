import { inject, injectable } from "tsyringe";
import { IUsuarioRepository } from "../../repositories/interfaces/IUsuarioRepository";
import { Usuario } from "../../entities/Usuario";

@injectable()
class ListUsuariosUseCase {
    
    constructor(
        @inject("UsuarioRepository") 
        private usuarioRepository: IUsuarioRepository
    ) {}

    async execute(): Promise<Usuario[]> {
        const usuarioAll = await this.usuarioRepository.list();

        return usuarioAll;
    }
}

export { ListUsuariosUseCase };