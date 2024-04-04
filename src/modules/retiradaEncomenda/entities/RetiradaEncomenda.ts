import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { Encomenda } from "../../encomenda/entities/Encomenda";


@Entity("retiradaEncomenda")
export class RetiradaEncomenda {

    @PrimaryGeneratedColumn({ name: "IdRetiradaEncomenda", type: "int" })
    idRtiradaEncomenda: number;

    @Column({ name: "dataHora", type: "datetime" })
    dataHora: Date;
    
    @Column({ name:"obsRetEncomenda", type: "varchar" })
    obsRetEncomenda: string;

    @OneToOne(() => Encomenda)
    @JoinColumn({ name: 'encomenda', referencedColumnName: 'idEncomenda' }) 
    encomenda: Encomenda;

   
    constructor() {
        this.dataHora = new Date();
        
    }
    }

