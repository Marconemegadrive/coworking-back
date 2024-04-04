export class TiposSalas {

    id : number;
    tipo : string;

    constructor(id : number, tipo : string){
        this.id = id;
        this.tipo = tipo;
    }
    // Getters
    getId(): number {
        return this.id;
    }
    getTipo(): string {
        return this.tipo;
    }
    setId(id: number): void {
        this.id = id;
    }
    setNome(tipo: string): void {
        this.tipo = tipo;
    }

}