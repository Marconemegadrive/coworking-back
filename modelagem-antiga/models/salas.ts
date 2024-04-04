import { StatusSalas } from "./statusSala";
import { TiposSalas } from "./tiposSala";

export class Salas {

    id : number;
    nome : string;
    qtdPessoas : number;
    tipo : TiposSalas;
    status : StatusSalas;
    obs ?: string;

    constructor(id : number, nome: string, qtdPessoas : number, tipo : TiposSalas, status : StatusSalas, obs : string){
        this.id = id;
        this.nome = nome;
        this.qtdPessoas = qtdPessoas;
        this.tipo = tipo;
        this.status = status;
        this.obs = obs;
    }

    // Getters
    getId(): number {
        return this.id;
    }
    getNome(): string {
        return this.nome;
    }
    getQtdPessoas(): number {
        return this.qtdPessoas;
    }
    getTipoSala(): TiposSalas {
        return this.tipo;
    }
    getStatusSala(): StatusSalas {
        return this.status;
    }

    // Setters
    setId(id: number): void {
        this.id = id;
    }
    setNome(nome: string): void {
        this.nome = nome;
    }
    setQtdPessoas(qtdPessoas: number): void {
        this.qtdPessoas;
    }
    setTipoSala(tipo : TiposSalas):  void{
        this.tipo;
    }
    setStatusSala(status : StatusSalas): void {
        this.status;
    }

}