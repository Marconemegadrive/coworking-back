import { StatusSalas } from "../models/statusSala";

class StatusSalaRepository {
  statusesDB = new Array<StatusSalas>();

  async save(status: StatusSalas): Promise<StatusSalas> {
      try {
          this.statusesDB.push(status);
          return status;
      } catch (err) {
          throw new Error("Falha ao criar o StatusSala!");
      }
  }

  async retrieveAll(): Promise<Array<StatusSalas>> {
      try {
          return this.statusesDB;
      } catch (error) {
          throw new Error("Falha ao retornar os StatusSala!");
      }
  }

  async retrieveById(statusId: number): Promise<StatusSalas | null> {
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
        throw new Error("Falha ao buscar o StatusSala!");
    }
}


  async update(statusSalas: StatusSalas): Promise<number> {
      const { id, tipo } = statusSalas;
      try {
          var encontrado = false;
          this.statusesDB.forEach(element => {
              if (element.id == statusSalas.id) {
                  element.tipo == statusSalas.tipo;
                  encontrado = true;
              }
          });
          if (encontrado) {
              return 1;
          } 
          return 0;
      } catch (error) {
          throw new Error("Falha ao atualizar o statusSala!");
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
          throw new Error("Falha ao deletar o statusSala!");
      }
  }

  async deleteAll(): Promise<number> {
      try {
          let num = this.statusesDB.length;
          this.statusesDB.splice(0, this.statusesDB.length);
          return num;
      } catch (error) {
          throw new Error("Falha ao deletar todos os statusSala!");
      }
  }

}

export default new StatusSalaRepository();
