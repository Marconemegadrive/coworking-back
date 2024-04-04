import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { Cliente } from "../../cliente/entities/Cliente";
import { TipoContrato } from "../../tipoContrato/entities/TipoContrato";

@Entity("contrato")
class Contrato {

    @PrimaryGeneratedColumn({ name: "idContrato", type: "int" })
    idContrato: number;

    @Column({ name: "dataInicio", type: "date" })
    dataInicio: Date;

    @Column({ name: "dataFinal", type: "date" }) // Corrigido de "dataInicio" para "dataFinal"
    dataFinal: Date;

    @Column({ name: "valor", type: "float" })
    valor: number;

    @Column({ name: "horaSR", type: "int" })
    horaSR: number;

    @Column({ name: "horaSC", type: "int" })
    horaSC: number;

    @Column({ name: "qtdBaias", type: "int" })
    qtdBaias: number;

    @Column({ name: "salaTrab", type: "int" })
    salaTrab: number;

    @Column({ name: "dataCriacao", type: "date" })
    dataCriacao: Date;

    @Column({ name: "dataAtualizacao", type: "date" })
    dataAtualizacao: Date;

    @Column({ name:"tipocontrato_idTipoContrato", type: "int" })
    tipocontrato_idTipoContrato: number;

    @OneToOne(() => TipoContrato)
    @JoinColumn({ name: "tipocontrato_idTipoContrato", referencedColumnName: "idTipoContrato" })
    tipoContrato: TipoContrato;

    @Column({ name: "cliente_idCliente", type: "int" })
    cliente_idCliente: number;

    @OneToOne(() => Cliente)
    @JoinColumn({ name: "cliente_idCliente", referencedColumnName: "idCliente" })
    cliente: Cliente;

    constructor() {
        this.dataCriacao = new Date();
        this.dataAtualizacao = new Date();
    }
}

export { Contrato };
