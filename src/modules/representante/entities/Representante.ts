import { Column, Entity, JoinColumn, OneToOne, PrimaryColumn } from "typeorm";
import { ClientePj } from "../../cliente/entities/ClientePj";
import { Usuario } from "../../usuario/entities/Usuario";

@Entity("representante")
class Representante {

    @PrimaryColumn({ name: "cpfRepresentante", type: "varchar" })
    cpfRepresentante: string;

    @Column({ name: "nome", type: "varchar" })
    nome: string;

    @Column({ name: "email", type: "varchar" })
    email: string;

    @Column({ name:"telefone", type: "varchar" })
    telefone: string;

    @Column({ name: "funcao", type: "varchar"})
    funcao: string;

    @Column({ name: "clientepj", type: "varchar"})
    clientepj: string;
 
    @OneToOne(() => ClientePj)
    @JoinColumn({ name: 'clientepj', referencedColumnName: 'cnpj' }) 
    clientePj: ClientePj;

    @OneToOne(() => Usuario)
    @JoinColumn({ name: 'usuario', referencedColumnName: 'idUsuario' }) 
    usuario: Usuario;

    @Column({ name: "dataCriacao", type: "date" })
    dataCriacao: Date;

    
}

export { Representante };