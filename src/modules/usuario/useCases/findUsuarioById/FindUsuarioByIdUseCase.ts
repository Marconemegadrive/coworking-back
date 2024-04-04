import { inject, injectable } from "tsyringe";
import { IUsuarioRepository } from "../../repositories/interfaces/IUsuarioRepository";
import { Usuario } from "../../entities/Usuario";
import { AppError } from "../../../../shared/errors/AppError";

@injectable()
class FindUsuarioByIdUseCase {

    constructor(
        @inject("UsuarioRepository")
        private usuarioRepository: IUsuarioRepository
    ) {}

    async execute(idUsuario: number): Promise<Usuario> {
        
        const usuario = await this.usuarioRepository.findById(idUsuario);

        if(!usuario) {
            throw new AppError("Usuário inexistente!");
        }
        return usuario;
    }
}

export { FindUsuarioByIdUseCase };