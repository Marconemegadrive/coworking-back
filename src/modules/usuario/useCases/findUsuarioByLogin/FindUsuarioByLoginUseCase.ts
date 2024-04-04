import { inject, injectable } from "tsyringe";
import { IUsuarioRepository } from "../../repositories/interfaces/IUsuarioRepository";
import { Usuario } from "../../entities/Usuario";
import { AppError } from "../../../../shared/errors/AppError";

@injectable()
class FindUsuarioByLoginUseCase {

    constructor(
        @inject("UsuarioRepository")
        private usuarioRepository: IUsuarioRepository
    ) {}

    async execute(login: string): Promise<Usuario> {

        const usuario = await this.usuarioRepository.findUsuarioByLogin(login);

        if(!usuario) {
            throw new AppError("Usuário inexiste!");
        }
        return usuario;
    }

}

export { FindUsuarioByLoginUseCase };