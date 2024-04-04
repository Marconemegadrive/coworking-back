import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { EnderecoFiscal } from "../../enderecoFiscal/entities/EnderecoFiscal";
// import { EnderecoFiscal_Cliente } from "../../enderecoFiscal/entities/EnderecoFiscal";

@Entity("encomenda")
export class Encomenda {

    @PrimaryGeneratedColumn({ name: "IdEncomenda", type: "int" })
    idEncomenda: number;

    @Column({ name: "obsEncomenda", type: "varchar" })
    obsEncomenda: string;

    @Column({ name: "dataCriacao", type: "datetime" })
    dataCriacao: Date;

    @Column({ name:"dataAtualizacao", type: "datetime" })
    dataAtualizacao: Date;

    @OneToOne(() => EnderecoFiscal)
    @JoinColumn({ name: 'enderecoFiscal', referencedColumnName: 'idEndFiscal' }) 
    enderecoFiscal: EnderecoFiscal;

    // @OneToOne(() => EnderecoFiscal_Cliente)
    // @JoinColumn({ name: 'enderecoFiscal', referencedColumnName: 'idEndFiscal' }) 
    // enderecoFiscal_Cliente: EnderecoFiscal_Cliente;
        
}
