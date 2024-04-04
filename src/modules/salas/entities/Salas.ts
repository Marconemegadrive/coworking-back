
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';
import { StatusSalas } from './StatusSalas'; // Supondo que você tenha uma entidade StatusSalas
import { TipoSalas } from './TipoSalas';

@Entity()
class Salas {
  @PrimaryGeneratedColumn()
  idSala: number;

  @Column({ length: 70, nullable: false })
  nome: string;

  @Column({ nullable: false })
  qtdPessoas: number;

  @Column({ length: 90, nullable: true })
  obs: string;

  @Column({nullable: false})
  StatusSalas_idStatus1: number;

  @ManyToOne(() => StatusSalas, { nullable: true })
  @JoinColumn({ name: "StatusSalas_idStatus1" })
  status: StatusSalas;

  @Column({ nullable: false })
  TipoSalas_idTipoSalas1: number;

  @ManyToOne(() => TipoSalas, { nullable: true })
  @JoinColumn({ name: "TipoSalas_idTipoSalas1" })
  tipo: TipoSalas;

  @Column({ type: 'datetime', default: () => 'CURRENT_TIMESTAMP' })
  dataCriacao: Date;

  @Column({ type: 'datetime', default: () => 'CURRENT_TIMESTAMP' })
  dataAtualizacao: Date;
}
export { Salas };