import { inject, injectable } from "tsyringe";
import { IUsuarioRepository } from "../../repositories/interfaces/IUsuarioRepository";
import { Usuario } from "../../entities/Usuario";
import { AppError } from "../../../../shared/errors/AppError";
import { IUpdateUsuarioDTO } from "../../repositories/dtos/IUpdateUsuarioDTO";

@injectable()
class UpdateUsuarioByLoginUseCase {

    constructor(
        @inject("UsuarioRepository")
        private usuarioRepository: IUsuarioRepository
    ) { }

    async execute(login: string, { senha, tipoUsuario, acessoAdm, nivelAcesso_IdAcesso }: IUpdateUsuarioDTO): Promise<Usuario> {
        
        const usuarioExists = await this.usuarioRepository.findUsuarioByLogin(login);

        if(!usuarioExists)  {
            throw new AppError("Usuário inexistente!");
        }

        const usuarioUpdated = await this.usuarioRepository.updateByLogin(login, {
            senha,
            tipoUsuario,
            acessoAdm,
            nivelAcesso_IdAcesso
        });
        return usuarioUpdated
    }
}

export { UpdateUsuarioByLoginUseCase };