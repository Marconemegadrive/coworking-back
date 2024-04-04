import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
//import { Funcionario } from './Funcionario'; // Supondo que você tenha uma entidade Funcionario
import { TipoAutorizacao } from './TipoAutorizacao'; // Supondo que você tenha uma entidade TipoAutorizacao
import { Funcionario } from '../../funcionario/entities/Funcionario';

@Entity({ name: 'autorizacao' })
export class Autorizacao {
  @PrimaryGeneratedColumn({ name: 'idAutorizacao' })
  idAutorizacao: number;

  @Column({ name: 'obs', length: 45 })
  obs: string;

  @Column({ name: 'dataCriacao', type: 'datetime' })
  dataCriacao: Date;

  @Column({ name: 'dataAtualizacao', type: 'datetime' })
  dataAtualizacao: Date;

  @Column({ name: 'funcionario_cpf', length: 11 })
  funcionario_cpf: string;

  @ManyToOne(() => Funcionario, { cascade: true })
  @JoinColumn({ name: 'funcionario_cpf', referencedColumnName: 'cpf' })
  funcionario: Funcionario;

  @Column({ name: 'tipoAutorizacao_idtipoAutorizacao' })
  tipoAutorizacao_idtipoAutorizacao: number;
  
  @ManyToOne(() => TipoAutorizacao, { cascade: true })
  @JoinColumn({ name: 'tipoAutorizacao_idtipoAutorizacao', referencedColumnName: 'idtipoAutorizacao' })
  tipoAutorizacao: TipoAutorizacao;

  constructor() {
    this.dataCriacao = new Date();
    this.dataAtualizacao = new Date();
  }
}
