import { Column, Entity, JoinColumn, ManyToOne, PrimaryColumn } from "typeorm";
import { Cliente } from "./Cliente";
import { Usuario } from "../../usuario/entities/Usuario";

@Entity("clientepf")
class ClienteCpf {

    @PrimaryColumn({ name: "cpf", type: "varchar" })
    cpf: string;

    @Column({ name: "nome", type: "varchar" })
    nome: string;

    @Column({ name: "dataNasc", type: "date" })
    dataNasc: Date;

    @Column({ name: "Cliente_idCliente", type: "int" })
    Cliente_idCliente: number;

    @ManyToOne(() => Cliente)
    @JoinColumn({ name: "Cliente_idCliente", referencedColumnName: "idCliente" }) 
    cliente: Cliente;

    @Column({ name: "usuario_idUsuario", type: "int" })
    usuario_idUsuario: number;

    @ManyToOne(() => Usuario)
    @JoinColumn({ name: "usuario_idUsuario", referencedColumnName: "idUsuario" }) 
    usuario: Usuario;
}

export { ClienteCpf };