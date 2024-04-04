import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { StatusCliente } from "./StatusCliente";

@Entity("cliente")
class Cliente {

    @PrimaryGeneratedColumn({ name: "idCliente", type: "int" })
    idCliente: number;

    @Column({ name: "contrato", type: "varchar" })
    contrato: string;

    @Column({ name: "StatusCliente_idStatusCliente", type: "int" })
    StatusCliente_idStatusCliente: number;

    @ManyToOne(() => StatusCliente)
    @JoinColumn({ name: 'StatusCliente_idStatusCliente', referencedColumnName: 'idStatus' }) 
    statusCliente: StatusCliente;

    @Column({ name: "dataCriacao", type: "date" })
    dataCriacao: Date;

    @Column({ name:"dataAtualizacao", type: "date" })
    dataAtualizacao: Date;
    
    constructor() {
        this.dataCriacao = new Date();
        this.dataAtualizacao = new Date();
    }
}

export { Cliente };