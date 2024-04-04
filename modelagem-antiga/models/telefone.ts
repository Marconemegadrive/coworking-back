export class Telefone {
    id : number;
    numTelefone : string;

    constructor(id : number, telefone : string) {
        this.id = id;
        this.numTelefone = telefone;
    }

    getId(): number {
        return this.id;
    }

    getTelefone(): string {
        return this.numTelefone;
    }


    setId(id : number): void {
        this.id = id;
    }

    setTelefone(numTelefone : string): void {
        this.numTelefone = numTelefone;
    }

}