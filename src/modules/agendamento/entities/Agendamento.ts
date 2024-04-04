import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from "typeorm";
import { Autorizacao } from "../../autorizacao/entities/Autorizacao";
import { Salas } from "../../salas/entities/Salas";
import { Usuario } from "../../usuario/entities/Usuario";



@Entity()
class Agendamento {
    @PrimaryGeneratedColumn()
    idAgendamento: number;

    @Column({ type: "datetime" })
    dataAgendamento: Date;

    @Column({ type: "time" })
    horaInicio: string;

    @Column({ type: "time" })
    horaFim: string;

    @Column({ type: "datetime" })
    dataCriacao: Date;

    @Column({ type: "datetime" })
    dataAlteracao: Date;

    @Column({ name: "autorizacao_idAutorizacao", type: "int" })
    autorizacao_idAutorizacao: number;

    @ManyToOne(() => Autorizacao)
    @JoinColumn({ name: "autorizacao_idAutorizacao" })
    autorizacao: Autorizacao;

    @Column({ name: "salas_idSala", type: "int" })
    salas_idSala: number;

    @ManyToOne(() => Salas)
    @JoinColumn({ name: "salas_idSala" })
    salas: Salas;

    @Column({ name: "usuario_idUsuario", type: "int" })
    usuario_idUsuario: number;

    @ManyToOne(() => Usuario)
    @JoinColumn({ name: "usuario_idUsuario" })
    usuario: Usuario;

    constructor() {
        this.dataCriacao = new Date();
        this.dataAlteracao = new Date();
    }
}
export { Agendamento };