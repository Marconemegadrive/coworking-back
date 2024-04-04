// Importando classes
import { Funcionario } from './funcionario'; 
import { Agendamento } from './agendamento'; 

export class Autorizacao {
   id: number;
   tipo: boolean;
   obs: string;
   funcionario: Funcionario;

  constructor(id: number, tipo: boolean, obs: string, funcionario: Funcionario) {
    this.id = id;
    this.tipo = tipo;
    this.obs = obs;
    this.funcionario = funcionario;
  }

  getId(): number {
    return this.id;
  }

  getTipo(): boolean {
    return this.tipo;
  }

  getObs(): string {
    return this.obs;
  }

  getFuncionario(): Funcionario {
    return this.funcionario;
  }

  setId(id: number): void {
    this.id = id;
  }

  setTipo(tipo: boolean): void {
    this.tipo = tipo;
  }

  setObs(obs: string): void {
    this.obs = obs;
  }
}
