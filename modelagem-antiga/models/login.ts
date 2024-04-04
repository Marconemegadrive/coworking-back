

export class Login {

    // Campos/ Atributos

    id: number;
    user: string;
    senha: number;
    // Construtor

    constructor(id: number, user: string, senha: number) {
        this.id = id;
        this.user = user;
        this.senha = senha;
    }

    // Getters
    getIdLogin(): number {
        return this.id;
    }
    getLogin(): string {
        return this.user;
    }
    getSenha(): number {
        return this.senha;
    }

    // Setters
    setSenha(senha: number): void {
        this.senha = senha;
    }
}