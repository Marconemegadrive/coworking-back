import { Funcionario } from "../models/funcionario";

class FuncionarioRepository {
  funcionariosDB = new Array<Funcionario>();

  async save(funcionario: Funcionario): Promise<Funcionario> {
      try {
          this.funcionariosDB.push(funcionario);
          return funcionario;
      } catch (err) {
          throw new Error("Falha ao criar o funcionario!");
      }
  }

  async retrieveAll(): Promise<Array<Funcionario>> {
      try {
          return this.funcionariosDB;
      } catch (error) {
          throw new Error("Falha ao retornar os funcionario!");
      }
  }

  async retrieveById(funcionarioId: number): Promise<Funcionario | null> {
      try {
          var encontrado = false;
          var funcionarioEncontrado = null;
          this.funcionariosDB.forEach(element => {
              if (element.id == funcionarioId) {
                  funcionarioEncontrado = element;
                  encontrado = true;
              }
          });
          if (encontrado) {
              return funcionarioEncontrado;
          }
          return null;
      } catch (error) {
          throw new Error("Falha ao buscar o funcionario!");
      }
  }

  async update(funcionario: Funcionario): Promise<number> {
      const { id, cpf, nome , emails, telefones} = funcionario;
      try {
          var encontrado = false;
          this.funcionariosDB.forEach(element => {
              if (element.id == funcionario.id) {
                element.cpf = funcionario.cpf;
                element.nome = funcionario.nome;
                element.emails = funcionario.emails;
                element.telefones = funcionario.telefones;
                  encontrado = true;
              }
          });
          if (encontrado) {
              return 1;
          }
          return 0;
      } catch (error) {
          throw new Error("Falha ao atualizar o funcionario!");
      }
  }

  async delete(funcionarioId: number): Promise<number> {
      try {
          var encontrado = false;
          this.funcionariosDB.forEach(element => {
              if (element.id == funcionarioId) {
                  this.funcionariosDB.splice(this.funcionariosDB.indexOf(element), 1);
                  encontrado = true;
              }
          });
          if (encontrado) {
              return 1;
          }
          return 0;
      } catch (error) {
          throw new Error("Falha ao deletar o funcionario!");
      }
  }

  async deleteAll(): Promise<number> {
      try {
          let num = this.funcionariosDB.length;
          this.funcionariosDB.splice(0, this.funcionariosDB.length);
          return num;
      } catch (error) {
          throw new Error("Falha ao deletar todos os funcionario!");
      }
  }

}

export default new FuncionarioRepository();