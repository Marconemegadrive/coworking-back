import { StatusCliente } from "../models/statusCliente";

class StatusClienteRepository {
  statusesDB = new Array<StatusCliente>();

  async save(status: StatusCliente): Promise<StatusCliente> {
      try {
          this.statusesDB.push(status);
          return status;
      } catch (err) {
          throw new Error("Falha ao criar o StatusCliente!");
      }
  }

  async retrieveAll(): Promise<Array<StatusCliente>> {
      try {
          return this.statusesDB;
      } catch (error) {
          throw new Error("Falha ao retornar os StatusCliente!");
      }
  }

  async retrieveById(statusId: number): Promise<StatusCliente | null> {
    try {
        var encontrado = false;
        var statusEncontrado = null;
        this.statusesDB.forEach(element => {            
            if (element.id == statusId) {
                statusEncontrado = element;
                encontrado = true;
            }
        });
        if (encontrado) {
            return statusEncontrado;
        } 
        return null;         
    } catch (error) {
        throw new Error("Falha ao buscar o StatusCliente!");
    }
}


  async update(status: StatusCliente): Promise<number> {
      const { id, statusCliente } = status;
      try {
          var encontrado = false;
          this.statusesDB.forEach(element => {
              if (element.id == status.id) {
                  element.statusCliente = status.statusCliente;
                  encontrado = true;
              }
          });
          if (encontrado) {
              return 1;
          } 
          return 0;
      } catch (error) {
          throw new Error("Falha ao atualizar o StatusCliente!");
      }
  }

  async delete(statusId: number): Promise<number> {
      try {
          var encontrado = false;
          this.statusesDB.forEach(element => {
              if (element.id == statusId) {
                  this.statusesDB.splice(this.statusesDB.indexOf(element), 1);
                  encontrado = true;
              }
          });
          if (encontrado) {
              return 1;
          } 
          return 0;
      } catch (error) {
          throw new Error("Falha ao deletar o StatusCliente!");
      }
  }

  async deleteAll(): Promise<number> {
      try {
          let num = this.statusesDB.length;
          this.statusesDB.splice(0, this.statusesDB.length);
          return num;
      } catch (error) {
          throw new Error("Falha ao deletar todos os StatusCliente!");
      }
  }

}

export default new StatusClienteRepository();

