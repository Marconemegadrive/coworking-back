import { Entity, PrimaryColumn, Column } from 'typeorm';

@Entity('TipoContrato')
export class TipoContrato {
  @PrimaryColumn()
  idTipoContratocol: number;

  @Column({ length: 80 })
  descricao: string;
}
