import { inject, injectable } from "tsyringe";
import { IUsuarioRepository } from "../../repositories/interfaces/IUsuarioRepository";
import { Usuario } from "../../entities/Usuario";
import { AppError } from "../../../../shared/errors/AppError";

@injectable()
class AutenticacaoUsuarioUseCase {

    constructor(
        @inject("UsuarioRepository")
        private usuarioRepository: IUsuarioRepository
    ) {}

    async execute(login: string, senha: string): Promise<Usuario> {
        
        const usuario = await this.usuarioRepository.findUsuarioByLogin(login);

        if (!usuario) {
            throw new AppError("Usuario ou senha incorretos");
        }

        const passwordComparison = usuario.senha === senha;

        if (!passwordComparison) {
            throw new AppError("Usuario ou senha incorretos");
        }

        return usuario;
    }
}

export { AutenticacaoUsuarioUseCase };