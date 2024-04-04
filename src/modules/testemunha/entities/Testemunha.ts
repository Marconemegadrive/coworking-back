import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity("testemunha")
class Testemunha {

    @PrimaryGeneratedColumn({ name: "idTestemunha", type: "int"})
    idTestemunha: number;

    @Column({ name: "nome", type: "varchar"})
    nome: string;

    @Column({ name: "cpf", type: "varchar" })
    cpf: string;

    constructor() {}
}

export { Testemunha };