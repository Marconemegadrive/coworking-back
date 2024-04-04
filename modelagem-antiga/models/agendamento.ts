// Importando classes
import { Salas } from './salas';
import { Autorizacao } from './autorizacao';
import { Login } from './login';

export class Agendamento {
    id: number;
    horarioInicio: Date; //Time
    horarioFim: Date; // Time
    data: Date;
    sala: Salas;
    autorizacao: Autorizacao;
    login: Login;
    dataRequisicao: Date;
    dataAlteracao: Date;

  constructor(
    id: number,
    horarioInicio: Date, //Time
    horarioFim: Date, //Time
    data: Date,
    sala: Salas,
    autorizacao: Autorizacao,
    login: Login,
    dataRequisicao: Date,
    dataAlteracao: Date
  ) {
    this.id = id;
    this.horarioInicio = horarioInicio;
    this.horarioFim = horarioFim;
    this.data = data;
    this.sala = sala;
    this.autorizacao = autorizacao;
    this.login = login;
    this.dataRequisicao = dataRequisicao;
    this.dataAlteracao = dataAlteracao;
  }

  getId(): number {
    return this.id;
  }

  getHorarioInicio(): Date {
    return this.horarioInicio;
  }

  getHorarioFim(): Date {
    return this.horarioFim;
  }

  getData(): Date {
    return this.data;
  }

  getSala(): Salas {
    return this.sala;
  }

  getAutorizacao(): Autorizacao {
    return this.autorizacao;
  }

  getLogin(): Login {
    return this.login;
  }

  getDataRequisicao(): Date {
    return this.dataRequisicao;
  }

  getDataAlteracao(): Date {
    return this.dataAlteracao;
  }

  setId(id: number): void {
    this.id = id;
  }

  setHorarioInicio(horarioInicio: Date): void {
    this.horarioInicio = horarioInicio;
  }

  setHorarioFim(horarioFim: Date): void {
    this.horarioFim = horarioFim;
  }

  setData(data: Date): void {
    this.data = data;
  }

  setSala(sala: Salas): void {
    this.sala = sala;
  }
}
