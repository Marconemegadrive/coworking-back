import { inject, injectable } from "tsyringe";
import { Usuario } from "../../entities/Usuario";
import { ICreateUsuarioDTO } from "../../repositories/dtos/ICreateUsuarioDTO";
import { IUsuarioRepository } from "../../repositories/interfaces/IUsuarioRepository";
import { AppError } from "../../../../shared/errors/AppError";

@injectable()
class CreateUsuarioUseCase {

    constructor(
        @inject("UsuarioRepository")
        private usuarioRepository: IUsuarioRepository
    ) {}

    async execute( { login, senha, tipoUsuario, acessoAdm, nivelAcesso_IdAcesso}: ICreateUsuarioDTO): Promise<Usuario> {

        const usuarioExists = await this.usuarioRepository.findUsuarioByLogin(login);
        
        if(usuarioExists) {
            throw new AppError("Usuário já existente!");
        }

        const usuario = await this.usuarioRepository.create({
            login, 
            senha, 
            tipoUsuario, 
            acessoAdm, 
            nivelAcesso_IdAcesso
        });

        return usuario;
    }
}

export { CreateUsuarioUseCase }