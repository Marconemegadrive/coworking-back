import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { Encomenda } from "../../encomenda/entities/Encomenda";

@Entity("recebimentoEncomenda")
class RecebimentoEncomenda {

    @PrimaryGeneratedColumn({ name: "idRecebimentoEncomenda", type: "int" })
    idRecbimentoEncomenda: number;
        
    @OneToOne(() => Encomenda)
    @JoinColumn({ name: 'encomenda', referencedColumnName: 'idEncomenda' }) 
    encomenda: Encomenda;

    @Column({ name: "dataHora", type: "date" })
    dataHora: Date;

    @Column({ name:"obsRecEncomenda", type: "varchar" })
    obsRecEncomenda: string;

       
    constructor() {
        this.dataHora = new Date();
    }

}

export { RecebimentoEncomenda };