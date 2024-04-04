import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Cliente } from "../../cliente/entities/Cliente";

@Entity("enderecoFiscal")
export class EnderecoFiscal {

    @PrimaryGeneratedColumn({ name: "IdEndFiscal", type: "int" })
    idEndFiscal: number;

    @Column({ name: "statusEndFiscal", type: "tinyint" })
    statusEndFiscal: number

    @Column({ name: "dataCriacao", type: "datetime" })
    dataCriacao: Date;

    @Column({ name:"dataAtualizacao", type: "datetime" })
    dataAtualizacao: Date;

    @Column({ name:"cliente_idCliente ", type: "int" })
    cliente_idCliente: number;

    @ManyToOne(() => Cliente)
    @JoinColumn({ name: 'cliente_idCliente', referencedColumnName: 'idCliente' }) 
    cliente: Cliente;
   
    constructor() {
        this.dataCriacao = new Date();
        this.dataAtualizacao = new Date();
    }
}
