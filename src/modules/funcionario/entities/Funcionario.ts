import { Column, Entity, JoinColumn, ManyToOne, PrimaryColumn } from "typeorm";
import { Usuario } from "../../usuario/entities/Usuario";

@Entity("funcionario")
class Funcionario {

    @PrimaryColumn({ name: "cpf", type: "varchar"})
    cpf: string;

    @Column({ name: "nome", type: "varchar" })
    nome: string;
    
    @Column({ name: "email", type: "varchar" })
    email: string;

    @Column({ name: "telefones", type: "int" })
    telefones: string;

    @Column({ name: "funcao", type: "varchar" })
    funcao: string;

    @Column({ name: "usuario_idUsuario", type: "int" })
    usuario_idUsuario: number;

    @ManyToOne(() => Usuario)
    @JoinColumn({ name: "usuario_idUsuario", referencedColumnName: "idUsuario"})
    usuario: Usuario

    @Column({ name: "dataCriacao", type: "date" })
    dataCriacao: Date;

    @Column({ name: "dataAtualizacao", type: "date" })
    dataAtualizacao: Date;

    constructor() {
        this.dataCriacao = new Date();
        this.dataAtualizacao = new Date();
    }
}

export { Funcionario };

