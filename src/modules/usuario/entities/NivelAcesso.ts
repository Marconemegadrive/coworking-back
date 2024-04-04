import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

// A annotaion @Entity() é um recurso do TypeORM para fazer a parametrização da nossa classe "NivelAcesso" com a Tabela "nivelacesso" do banco de dados.
@Entity("nivelAcesso")
class NivelAcesso {

    // A annotaion @PrimaryGeneratedColumn() sinalizará a nossa chave primária dentro da nossa classe "NivelAcesso"
    @PrimaryGeneratedColumn({ name: "idAcesso", type: "int" })
    idAcesso: number;

    // A annotaion @Column() sinalizará quais atributos da nossa classe "NivelAcesso" são colunas na Tabela "nivelacesso" do banco de dados.
    @Column({ name: "nome", type: "varchar" })
    nome: string

    @Column({ name: "nivel", type: "int" })
    nivel: number

    constructor() {}
}

export { NivelAcesso };