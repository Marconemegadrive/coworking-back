import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Cliente } from "../../cliente/entities/Cliente";
import { Funcionario } from "../../funcionario/entities/Funcionario";

@Entity("email")
class Email {

    @PrimaryGeneratedColumn({ name: "idEmail", type: "int" })
    idEmail: number;

    @Column({ name: "email", type: "varchar" })
    email: string;

    @Column({ name: "Cliente_idCliente", type: "varchar" })
    Cliente_idCliente?: number;

    @ManyToOne(() => Cliente)
    @JoinColumn({ name: "Cliente_idCliente", referencedColumnName: "idCliente" }) 
    cliente: Cliente;

    @Column({ name: "Funcionario_cpf", type: "varchar" })
    Funcionario_cpf?: string;

    @ManyToOne(() => Funcionario)
    @JoinColumn({ name: "Funcionario_cpf", referencedColumnName: "cpf" }) 
    funcionario: Funcionario;

    constructor() {
        if (!this.Cliente_idCliente) {
            this.Cliente_idCliente = null;
        }

        if (!this.Funcionario_cpf) {
            this.Funcionario_cpf = null;
        }
    }
}

export { Email };