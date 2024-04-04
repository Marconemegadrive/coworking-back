import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Cliente } from "../../cliente/entities/Cliente";
import { Funcionario } from "../../funcionario/entities/Funcionario";

@Entity("telefone")
class Telefone {

    @PrimaryGeneratedColumn({ name: "idTelefone", type: "int" })
    idTelefone: number;

    @Column({ name: "telefone", type: "varchar" })
    telefone: string;

    @Column({ name: "Cliente_idCliente", type: "varchar" })
    Cliente_idCliente?: number;

    @ManyToOne(() => Cliente)
    @JoinColumn({ name: "Cliente_idCliente", referencedColumnName: "idCliente" }) 
    cliente: Cliente;

    @Column({ name: "Funcionario_cpf1", type: "varchar" })
    Funcionario_cpf1?: string;

    @ManyToOne(() => Funcionario)
    @JoinColumn({ name: "Funcionario_cpf1", referencedColumnName: "cpf" }) 
    funcionario: Funcionario;

    constructor() {
        if (!this.Cliente_idCliente) {
            this.Cliente_idCliente = null;
        }

        if (!this.Funcionario_cpf1) {
            this.Funcionario_cpf1 = null;
        }
    }
}

export { Telefone };