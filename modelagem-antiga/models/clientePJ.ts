import { Cliente } from "./cliente";
import { Contrato } from "./contrato";
import { Email } from "./email";
import { Endereco } from "./endereco";
import { StatusCliente } from "./statusCliente";
import { Telefone } from "./telefone";


export class ClientePJ extends Cliente {

    // Campos/ Atributos

    cnpj: string;
    razaoSocial: string;

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
        cnpj: string,
        razaoSocial: string,
        ) {

        super(idCliente, nome, emails, telefones, endereco, contrato, status, dataCadastro, dataAlteracao);
        this.cnpj = cnpj;
        this.razaoSocial =razaoSocial;
            
        }

        // Getters

        getCnpj(): string {
            return this.cnpj;
        }

        getRazaoSocial(): string {
            return this.razaoSocial;
        }

        setRazaoSocial(razaoSocial: string): void {
            this.razaoSocial = razaoSocial;
        }
       
}