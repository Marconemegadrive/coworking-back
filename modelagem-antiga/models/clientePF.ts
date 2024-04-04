import { Cliente } from "./cliente";
import { Contrato } from "./contrato";
import { Email } from "./email";
import { Endereco } from "./endereco";
import { StatusCliente } from "./statusCliente";
import { Telefone } from "./telefone";


export class ClientePF extends Cliente {

    // Campos/ Atributos

    cpf: string;
    // private nome: string;

    // Construtor
    constructor (
        idCliente: number,
        nome : string,
        emails: Array<Email>,
        telefones: Array<Telefone>, 
        endereco: Endereco, 
        contrato: Contrato,
        status: StatusCliente,
        dataCadastro : Date,
        dataAlteracao : Date,
        cpf: string,
        // this.nome = nome
        ) {

        super(idCliente, nome, emails, telefones, endereco, contrato, status, dataCadastro, dataAlteracao);
        this.cpf = cpf;
        // this.nome = nome;


        }

        // Getters

        getCpf(): string {
            return this.cpf;
        }

       /* getNome(): string {
            return this.nome;
        }
        

        setNome(nome: string): void {
            this.nome = nome;
        }
        */
       
}