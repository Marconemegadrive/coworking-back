import { Column, Entity, JoinColumn, ManyToOne, PrimaryColumn } from "typeorm";
import { Cliente } from "./Cliente";

@Entity("clientepj")
class ClientePj {

    @PrimaryColumn({ name: "cnpj", type: "varchar" })
    cnpj: string;

    @Column({ name: "razaoSocial", type: "varchar" })
    razaoSocial: string;

    @Column({ name: "nomeFatasia", type: "varchar" })
    nomeFantasia: string

    @Column({ name: "dataFundacao", type: "date" })
    dataFundacao: Date;

    @Column({ name: "Cliente_idCliente", type: "int" })
    Cliente_idCliente: number;

    @ManyToOne(() => Cliente)
    @JoinColumn({ name: "Cliente_idCliente", referencedColumnName: "idCliente" }) 
    cliente: Cliente;
}

export { ClientePj };