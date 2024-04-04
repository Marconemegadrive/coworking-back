import { Column, Entity, PrimaryColumn } from "typeorm";

//TODO: requer correção do script do banco de dados
    //colocar entidade como tipoContrato
@Entity("tipocontrato")
class TipoContrato{

    @PrimaryColumn({ name: "idTipoContrato", type: "int" })
    idTipoContrato: number;

    @Column({ name: "descricao", type: "varchar" })
    descricao: string;

}

export { TipoContrato };