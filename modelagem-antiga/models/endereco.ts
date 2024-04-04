
export class Endereco {

    // Campos/ Atributos

    id: number;
    uf: string;
    cep: string;
    cidade: string;
    bairro: string;
    rua: string;
    numero: number;
    comple: string;

    // Construtor

    constructor(id: number, uf: string, cep: string, cidade: string, bairro: string, rua: string, numero: number, comple: string) {
        this.id = id;
        this.uf = uf;
        this.cep = cep;
        this.cidade = cidade;
        this.bairro = bairro;
        this.rua = rua;
        this.numero = numero;
        this.comple = comple;

    }

    // Getters
    getIdEndereco(): number {
        return this.id;
    }
    getUF(): string {
        return this.uf;
    }
    getCEP(): string {
        return this.cep;
    }
    getCidade(): string {
        return this.cidade;
    }
    getBairro(): string {
        return this.bairro;
    }
    getRua(): string {
        return this.rua;
    }
    getNumero(): number {
        return this.numero;
    }
    getComplemento(): string {
        return this.comple;
    }

    // Setters
    setId(id: number): void {
        this.id = id;
    }
    setUF(uf: string): void {
        this.uf = uf;
    }
    setCEP(cep: string): void {
        this.cep = cep;
    }
    setCidade(cidade: string): void {
        this.cidade = cidade;
    }
    setBairro(bairro: string): void {
        this.bairro = bairro;
    }
    setRua(rua: string): void {
        this.rua = rua;
    }
    setNumero(numero: number): void {
        this.numero = numero;
    }
    setComplemento(comple: string): void {
        this.comple = comple;
    }
}








