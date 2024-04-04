import { inject, injectable } from "tsyringe";
import { IUsuarioRepository } from "../../repositories/interfaces/IUsuarioRepository";
import { Usuario } from "../../entities/Usuario";
import { AppError } from "../../../../shared/errors/AppError";
import { IUpdateUsuarioDTO } from "../../repositories/dtos/IUpdateUsuarioDTO";

@injectable()
class UpdateUsuarioByIdUseCase {

    constructor(
        @inject("UsuarioRepository")
        private usuarioRepository: IUsuarioRepository
    ) { }

    async execute(idUsuario: number, { senha, tipoUsuario, acessoAdm, nivelAcesso_IdAcesso }: IUpdateUsuarioDTO): Promise<Usuario> {

        const usuarioExist = await this.usuarioRepository.findById(idUsuario);

        if (!usuarioExist) {
            throw new AppError("Usuário inexistente!");
        }

        const usuarioUpdated = await this.usuarioRepository.update(idUsuario, {
            senha,
            tipoUsuario,
            acessoAdm,
            nivelAcesso_IdAcesso
        });
        return usuarioUpdated;
    }
}

export { UpdateUsuarioByIdUseCase };