import { inject, injectable } from "tsyringe";
import { IUsuarioRepository } from "../../repositories/interfaces/IUsuarioRepository";
import { INivelAcessoRepository } from "../../repositories/interfaces/INivelAcessoRepository";
import { Usuario } from "../../entities/Usuario";
import { AppError } from "../../../../shared/errors/AppError";

@injectable()
class CreateUsuarioNivelAcessoUseCase {

    constructor(
        @inject("UsuarioRepository")
        private usuarioRepository: IUsuarioRepository,
        @inject("NivelAcessoRepository")
        private nivelAcessoRepository: INivelAcessoRepository
    ) {}

    async execute(nivelAcesso: number, nomeNivel: string, login: string, senha: string, tipoUsuario: number, acessoAdm: number): Promise<Usuario> {

        const usuarioExists = await this.usuarioRepository.findUsuarioByLogin(login);
        
        if(usuarioExists) {
            throw new AppError("Usuário já existente!");
        }

        const nivelAcessoCreated = await this.nivelAcessoRepository.create({
            nome: nomeNivel,
            nivel: nivelAcesso
        });

        const usuarioCreated = await this.usuarioRepository.create({
            login,
            senha,
            tipoUsuario,
            acessoAdm,
            nivelAcesso_IdAcesso: nivelAcessoCreated.idAcesso
        });
        
        return usuarioCreated;
    }
}

export { CreateUsuarioNivelAcessoUseCase };