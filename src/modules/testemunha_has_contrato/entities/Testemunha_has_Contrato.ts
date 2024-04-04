import { Column, Entity, JoinColumn,PrimaryColumn, OneToOne, ManyToOne } from "typeorm";
import { Testemunha } from "../../testemunha/entities/Testemunha";
import { Contrato } from "../../contrato/entities/Contrato";

@Entity("testemunha_has_contrato")
class Testemunha_has_Contrato {
    
    @PrimaryColumn({ name: "Testemunha_idTestemunha", type: "int" })
    Testemunha_idTestemunha: number;

    @ManyToOne(() => Testemunha, )
    @JoinColumn({ name: "Testemunha_idTestemunha", referencedColumnName: "idTestemunha" })
    testemunha: Testemunha;

    @PrimaryColumn({ name: "Contrato_idContrato", type: "int" })
    Contrato_idContrato: number;

    @ManyToOne(() => Contrato)
    @JoinColumn({ name: "Contrato_idContrato", referencedColumnName: "idContrato" })
    contrato: Contrato;

    constructor() {}
}

export { Testemunha_has_Contrato };