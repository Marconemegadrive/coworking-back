import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Cliente } from "../../cliente/entities/Cliente";

@Entity("endereco")
class Endereco {

    @PrimaryGeneratedColumn({ name: "idEndereco", type: "int" })
    idEndereco: number;

    @Column({ name: "uf", type: "varchar" })
    uf: string;

    @Column({ name: "cep", type: "varchar" })
    cep: string;

    @Column({ name: "cidade", type: "varchar" })
    cidade: string;

    @Column({ name: "bairro", type: "varchar" })
    bairro: string;

    @Column({ name: "rua", type: "varchar" })
    rua: string;

    @Column({ name: "numero", type: "varchar" })
    numero: string;

    @Column({ name: "complemento", type: "varchar" })
    complemento: string;
    
    @Column({ name: "obs", type: "varchar" })
    obs?: string;

    @Column({ name: "cliente_idCliente", type: "int" })
    cliente_idCliente: number;

    @ManyToOne(() => Cliente)
    @JoinColumn({ name: "cliente_idCliente", referencedColumnName: "idCliente" }) 
    cliente: Cliente;
}

export { Endereco };