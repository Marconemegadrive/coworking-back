import { Entity, PrimaryColumn, ManyToOne, JoinColumn } from 'typeorm';
import { Testemunha } from './Testemunha';
import { Contrato } from './Contrato';

@Entity()
export class Testemunha_has_Contrato {
  @PrimaryColumn()
  Testemunha_idTestemunha: number;

  @PrimaryColumn()
  Contrato_idContrato: number;

  @ManyToOne(() => Testemunha)
  @JoinColumn({ name: 'Testemunha_idTestemunha' })
  testemunha: Testemunha;

  @ManyToOne(() => Contrato)
  @JoinColumn({ name: 'Contrato_idContrato' })
  contrato: Contrato;
}
