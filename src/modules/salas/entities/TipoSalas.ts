import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
class TipoSalas {
  @PrimaryGeneratedColumn()
  idTipoSalas: number;

  @Column({ length: 80 })
  tipoSalas: string;

  constructor (){};
  
}
export { TipoSalas};