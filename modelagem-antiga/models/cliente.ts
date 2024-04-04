import { Contrato } from "./contrato";  // precisa criar a classe contrato
import { Email } from "./email";
import { Endereco } from "./endereco"; // precisa criar a classe endereco
import { Telefone } from "./telefone";
import { StatusCliente } from "./statusCliente";


export class Cliente {

// Campos / Atributos
id: number;
nome : string;
emails : Array<Email>;
telefones: Array<Telefone>;
endereco: Endereco;  // erro será corrigido quando criar a classe endereco
contrato: Contrato;  // erro será corrigido quando criar a classe Contrato
status : StatusCliente;
dataCadastro : Date;
dataAlteracao : Date;

// Construtor
constructor(
    id: number,
    nome : string,
    _emails: Array<Email>,
    _telefones: Array<Telefone>,
    endereco: Endereco, 
    contrato: Contrato,
    status: StatusCliente,
    dataCadastro : Date,
    dataAlteracao : Date
    ) {

    this.id= id;
    this.nome = nome;
    this.emails= new Array<Email>();
    this.telefones= new Array<Telefone>();
    this.endereco= endereco;
    this.contrato= contrato;
    this.status= status;
    this.dataCadastro= dataCadastro;
    this.dataAlteracao= dataAlteracao;
    
    }

    // Getters
    getIdCliente(): number { 
        return this.id;
    }

    getNome(): string { 
        return this.nome;
    }

    getEmail(): Array<Email> { 
        return this.emails;
    }

    getTelefones(): Array<Telefone> { 
        return this.telefones;
    }

    getEndereco(): Endereco {
        return this.endereco;
    }
    getContrato(): Contrato { 
        return this.contrato;
    }

    getStatus(): StatusCliente {
        return  this.status;
    }

    getDataCadastro(): Date {
        return this.dataCadastro;
    }

    getDataAlteracao(): Date{
        return this.dataAlteracao;
    }

    // Setters

    setidCliente(id: number): void {
        this.id = id;
    }

    setNome(nome : string): void { 
        this.nome = nome;
    }

    setEndereco(endereco: Endereco): void {
        this.endereco = endereco;
    }

    setContrato(contrato: Contrato): void {
        this.contrato = contrato;
    }

    setStatus(status: StatusCliente): void {
        this.status = status;
    }

    setDataCadastro(dataCadastro: Date): void {
        this.dataCadastro= dataCadastro;
    }

    setDataAlteracao(dataAlteracao: Date): void{
        this.dataAlteracao= dataAlteracao;
    }

    // Metodos
    public addEmail(emailCliente: Email): void{
        this.emails.push(emailCliente);
    }

    public removeEmail(emailCliente: Email): void{
        this.emails.splice(this.emails.indexOf(emailCliente), 1);
    }

    public addTelefone(telefoneCliente: Telefone): void{
        this.telefones.push(telefoneCliente);
    }

    public removeTelefone(telefoneCliente: Telefone): void{
        this.telefones.splice(this.telefones.indexOf(telefoneCliente),1);
    }

}