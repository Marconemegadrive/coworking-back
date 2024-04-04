import { TiposSalas } from "../models/tiposSala";

class TiposSalasRepository {
    tiposSalassDB = new Array<TiposSalas>();
  
    async save(tiposSalas: TiposSalas): Promise<TiposSalas> {
        try {
            this.tiposSalassDB.push(tiposSalas);
            return tiposSalas;
        } catch (err) {
            throw new Error("Falha ao criar o tiposSalas!");
        }
    }
  
    async retrieveAll(): Promise<Array<TiposSalas>> {
        try {
            return this.tiposSalassDB;
        } catch (error) {
            throw new Error("Falha ao retornar os tiposSalas!");
        }
    }
  
    async retrieveById(tiposSalasId: number): Promise<TiposSalas | null> {
        try {
            var encontrado = false;
            var tiposSalasEncontrado = null;
            this.tiposSalassDB.forEach(element => {
                if (element.id == tiposSalasId) {
                    tiposSalasEncontrado = element;
                    encontrado = true;
                }
            });
            if (encontrado) {
                return tiposSalasEncontrado;
            }
            return null;
        } catch (error) {
            throw new Error("Falha ao buscar o tiposSalas!");
        }
    }
  
    async update(tiposSalas: TiposSalas): Promise<number> {
        const { id, tipo} = tiposSalas;
        try {
            var encontrado = false;
            this.tiposSalassDB.forEach(element => {
                if (element.id == tiposSalas.id) {
                    element.tipo = tiposSalas.tipo;
                    encontrado = true;
                }
            });
            if (encontrado) {
                return 1;
            }
            return 0;
        } catch (error) {
            throw new Error("Falha ao atualizar as tiposSalas!");
        }
    }
  
    async delete(tiposSalasId: number): Promise<number> {
        try {
            var encontrado = false;
            this.tiposSalassDB.forEach(element => {
                if (element.id == tiposSalasId) {
                    this.tiposSalassDB.splice(this.tiposSalassDB.indexOf(element), 1);
                    encontrado = true;
                }
            });
            if (encontrado) {
                return 1;
            }
            return 0;
        } catch (error) {
            throw new Error("Falha ao deletar o tiposSalas!");
        }
    }
  
    async deleteAll(): Promise<number> {
        try {
            let num = this.tiposSalassDB.length;
            this.tiposSalassDB.splice(0, this.tiposSalassDB.length);
            return num;
        } catch (error) {
            throw new Error("Falha ao deletar todos os tiposSalas!");
        }
    }
  
  }
  
  export default new TiposSalasRepository();