import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("statuscliente")
class StatusCliente {

    @PrimaryGeneratedColumn({ name: "idStatusCliente", type: "int" })
    idStatus: number;

    @Column({ name: "tipo", type: "varchar" })
    tipo: string;

    constructor() {}
}

export { StatusCliente };