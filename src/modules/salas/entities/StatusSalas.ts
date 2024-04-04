import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
class StatusSalas {
  @PrimaryGeneratedColumn()
  idStatus: number;

  @Column({ length: 45 })
  statusSalas: string;

  constructor (){};
  
}

export { StatusSalas };