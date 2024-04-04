export class StatusSalas {

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
    getStatus(): string {
        return this.tipo;
    }
    setId(id: number): void {
        this.id = id;
    }
    setStatus(status: string): void {
        this.tipo = status;
    }

}