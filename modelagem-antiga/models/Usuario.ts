import { Entity, PrimaryGeneratedColumn, Column, Unique } from 'typeorm';

@Entity({ name: 'Usuario' })
@Unique(['loginEmail'])
export class Usuario {
  @PrimaryGeneratedColumn({ name: 'idUsuario' })
  idUsuario: number;

  @Column({ name: 'login-email', length: 70, unique: true })
  loginEmail: string;

  @Column({ name: 'senha', length: 45 })
  senha: string;

  @Column({ name: 'acessoAdm' })
  acessoAdm: number;
}
