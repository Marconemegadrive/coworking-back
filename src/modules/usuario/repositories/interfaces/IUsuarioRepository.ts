import { Usuario } from "../../entities/Usuario"
import { IUpdateUsuarioDTO } from "../dtos/IUpdateUsuarioDTO";
import { ICreateUsuarioDTO } from "../dtos/ICreateUsuarioDTO";

interface IUsuarioRepository {
    
    create({ 
        login, 
        senha, 
        tipoUsuario,
        acessoAdm,
        nivelAcesso_IdAcesso
    }: ICreateUsuarioDTO): Promise <Usuario>;

    list(): Promise<Usuario[]>;

    findById(id: number): Promise<Usuario>;

    findUsuarioByLogin(login: string): Promise<Usuario>;

    update(idUsuario: number, { senha, tipoUsuario, acessoAdm, nivelAcesso_IdAcesso }: IUpdateUsuarioDTO):Promise<Usuario>;

    updateByLogin(login: string, { senha, tipoUsuario , acessoAdm, nivelAcesso_IdAcesso }: IUpdateUsuarioDTO):Promise<Usuario>;

    delete(idUsuario: number): Promise<Usuario>;

}

export { IUsuarioRepository };