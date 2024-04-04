import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { NivelAcesso } from "./NivelAcesso";

@Entity("usuario")
class Usuario {

    @PrimaryGeneratedColumn({ name: "idUsuario", type: "int" })
    idUsuario: number;

    @Column({ name: "login", type: "varchar" })
    login: string;

    @Column({ name: "senha", type: "varchar" })
    senha: string;

    @Column({ name:"tipoUsuario", type: "tinyint" })
    tipoUsuario: number;

    @Column({ name: "acessoAdm", type: "tinyint"})
    acessoAdm: number;

    @Column({ name: "nivelAcesso_IdAcesso", type: "int"})
    nivelAcesso_IdAcesso: number;
    
    @OneToOne(() => NivelAcesso)
    @JoinColumn({ name: 'nivelAcesso_IdAcesso', referencedColumnName: 'idAcesso' }) 
    nivelAcesso: NivelAcesso;

    @Column({ name: "dataCriacao", type: "date" })
    dataCriacao: Date;

    @Column({ name:"dataAtualizacao", type: "date" })
    dataAtualizacao: Date;

    constructor() {
        this.dataCriacao = new Date();
        this.dataAtualizacao = new Date();
    }
}

export { Usuario };