interface ICreateUsuarioDTO {
    login: string;
    senha: string;
    tipoUsuario: number;
    acessoAdm: number;
    nivelAcesso_IdAcesso: number;
}

export { ICreateUsuarioDTO };