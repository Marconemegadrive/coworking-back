import { Entity, PrimaryColumn, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
class TipoAutorizacao {
  @PrimaryGeneratedColumn({ name: 'idtipoAutorizacao' })
  idtipoAutorizacao: number;

  @Column({ type: 'varchar', length: 45 })
  tipoAutorizacao: string;

  constructor (){};

}

export { TipoAutorizacao };
