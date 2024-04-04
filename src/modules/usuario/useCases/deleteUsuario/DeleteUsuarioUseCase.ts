import { inject, injectable } from "tsyringe";
import { IUsuarioRepository } from "../../repositories/interfaces/IUsuarioRepository";
import { Usuario } from "../../entities/Usuario";
import { AppError } from "../../../../shared/errors/AppError";

@injectable()
class DeleteUsuarioUseCase {

    constructor(
        @inject("UsuarioRepository")
        private usuarioRepository: IUsuarioRepository
    ) {}

    async execute(idUsuario: number): Promise<Usuario> {
        const usuarioExists = await this.usuarioRepository.findById(idUsuario);

        if(!usuarioExists) {
            throw new AppError("Usuário inexistente!");
        }

        const usuarioDeletado = await this.usuarioRepository.delete(idUsuario);

        return usuarioDeletado;
    }
}

export { DeleteUsuarioUseCase };