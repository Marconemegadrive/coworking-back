import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class TipoSalas {
  @PrimaryGeneratedColumn()
  idTipoSalas: number;

  @Column({ length: 80, nullable: false })
  tipo: string;
}
