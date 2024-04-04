export class Testemunha {
    id: number;
    nome: string;
    cpf: string;

    constructor(id: number, nome: string, cpf: string) {
        this.id = id;
        this.nome = nome;
        this.cpf = cpf;
    }

    getId(): number {
        return this.id;
    }

    getNome(): string {
        return this.nome;
    }
    getCpf(): string {
        return this.cpf;
    }

    setId(id: number): void {
        this.id = id;
    }

    setnome(nome: string): void {
        this.nome = nome;
    }
    setCpf(cpf: string): void {
        this.cpf = cpf;
    }
}