export class Email {
    id : number;
    nEmail : string;

    constructor(id : number, nEmail : string) {
        this.id = id;
        this.nEmail = nEmail;
    }

    getId(): number {
        return this.id;
    }

    getEmail(): string {
        return this.nEmail;
    }

    setId(id : number): void {
        this.id = id;
    }

    setEmail(nEmail : string): void {
        this.nEmail = nEmail;
    }
}