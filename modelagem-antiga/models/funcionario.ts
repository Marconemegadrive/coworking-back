import { Email } from "./email";
import { Endereco } from "./endereco";
import { Telefone } from "./telefone";

export class Funcionario {

    // Campos/ Atributos
    
    id: number;
    cpf: string;
    nome: string;
    emails: Array<Email>;
    telefones: Array<Telefone>;

    // Construtor

    constructor(id: number, cpf: string, nome: string,  _emails: Array<Email>, _telefones: Array<Telefone>, ) {

        this.cpf = cpf;
        this.nome = nome;
        this.emails= new Array<Email>();
        this.telefones= new Array<Telefone>();
        this.id = id;
    }
    // Getters

    getCpf(): string {
        return this.cpf;
    }
    getNome(): string {
        return this.nome;
    }

    // Setters

    setNome(nome: string): void {
        this.nome = nome;
    }
}