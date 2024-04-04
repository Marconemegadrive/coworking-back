import { Repository } from "typeorm";
import { Usuario } from "../../entities/Usuario";
import { ICreateUsuarioDTO } from "../dtos/ICreateUsuarioDTO";
import { IUsuarioRepository } from "../interfaces/IUsuarioRepository";
import { AppDataSource } from "../../../../shared/database/data-source";
import { IUpdateUsuarioDTO } from "../dtos/IUpdateUsuarioDTO";

class UsuarioRepository implements IUsuarioRepository {
    
    private repository: Repository<Usuario>;

    constructor() {
        this.repository = AppDataSource.getRepository(Usuario);
    }

    async create({ login, senha, tipoUsuario, acessoAdm, nivelAcesso_IdAcesso }: ICreateUsuarioDTO): Promise<Usuario> {
        
        const usuario = this.repository.create({
            login,
            senha,
            tipoUsuario,
            acessoAdm,
            nivelAcesso_IdAcesso
        });

        await this.repository.save(usuario);

        return usuario
    }
    
    async list(): Promise<Usuario[]> {
        
        const usuarios = await this.repository.find();

        return usuarios;
    }

    async findById(idUsuario: number): Promise<Usuario> {
        const usuario = await this.repository.findOne({ where: { idUsuario } });

        return usuario;
    }

    async findUsuarioByLogin(login: string): Promise<Usuario> {
        const usuario = await this.repository.findOne({ where: { login } });

        return usuario;
    }

    async update(idUsuario: number, { senha, tipoUsuario, acessoAdm, nivelAcesso_IdAcesso }: IUpdateUsuarioDTO): Promise<Usuario> {
        const usuario = await this.repository.findOne({ where: { idUsuario } });

        if (usuario) {
            usuario.senha = senha ? senha  : usuario.senha;
            usuario.tipoUsuario = tipoUsuario ? tipoUsuario : usuario.tipoUsuario;
            usuario.acessoAdm = acessoAdm ? acessoAdm : usuario.acessoAdm;
            usuario.nivelAcesso_IdAcesso = nivelAcesso_IdAcesso ? nivelAcesso_IdAcesso : usuario.nivelAcesso_IdAcesso;
    
            await this.repository.save(usuario);

            return usuario;
        }
    }

    async updateByLogin(login: string, { senha, tipoUsuario, acessoAdm, nivelAcesso_IdAcesso }: IUpdateUsuarioDTO): Promise<Usuario> {
        const usuario = await this.repository.findOne({ where: { login } });

        if (usuario) {
            usuario.senha = senha ? senha  : usuario.senha;
            usuario.tipoUsuario = tipoUsuario ? tipoUsuario : usuario.tipoUsuario;
            usuario.acessoAdm = acessoAdm ? acessoAdm : usuario.acessoAdm;
            usuario.nivelAcesso_IdAcesso = nivelAcesso_IdAcesso ? nivelAcesso_IdAcesso : usuario.nivelAcesso_IdAcesso;
    
            await this.repository.save(usuario);

            return usuario;
        }
    }

    async delete(idUsuario: number): Promise<Usuario> {
        
        const usuario = await this.repository.findOne({ where: { idUsuario } });

        if(usuario) {
            await this.repository.remove(usuario);
            return usuario;
        }
    }
}

export { UsuarioRepository };