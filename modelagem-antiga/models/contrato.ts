import { Testemunha } from "./testemunha";

export class Contrato {
    id : number;
    dataInicio : Date;
    dataFinal : Date;
    dataCadastro : Date;
    dataAlteracao : Date;
    valor : number;
    horasSR : number;
    horasSC : number;
    qtdBaias ?: number;
    salaTrabalho ?: string;
    testemunha : Testemunha;


    constructor(id: number , dataInicio : Date, dataFinal : Date, dataCadastro : Date, dataAlteracao : Date, valor : number, 
        horasSR : number, horasSC : number, qtdBaias : number, salaTrabalho : string, testemunha : Testemunha) {
        this.id = id;
        this.dataInicio = dataInicio;
        this.dataFinal = dataFinal;
        this.dataCadastro  = dataCadastro;
        this.dataAlteracao = dataAlteracao;
        this.valor = valor;
        this.horasSR = horasSR;
        this.horasSC = horasSC;
        this.qtdBaias = qtdBaias;
        this.salaTrabalho = salaTrabalho;
        this.testemunha = testemunha;
    }

    getDataInicio(): Date {
        return this.dataInicio;
    }

    getDataFinal(): Date {
        return this.dataFinal;
    }
    getDataCadastro(): Date {
        return this.dataCadastro;
    }

    getDataAlteracao(): Date {
        return this.dataAlteracao;
    }

    getValor(): number {
        return this.valor;
    }

    getHorasSR(): number {
        return this.horasSR;
    }

    getHorasSC(): number {
        return this.horasSC;
    }

    /*getQtdBaias(): number {
        return this.qtdBaias;
    }

    getSalaTrabalho(): string {
        return this.salaTrabalho;
    }*/

    getTestemunha(): Testemunha {
        return this.testemunha;
    }


    setDataInicio(dataInicio : Date): void {
        this.dataInicio = dataInicio;
    }

    setDataFinal(dataFinal : Date): void {
        this.dataFinal = dataFinal;
    }
    setdataCadastro(dataCadastro : Date): void{
        this.dataCadastro = dataCadastro;
    }

    setDataAlteracao(dataAlteracao : Date): void {
        this.dataAlteracao = dataAlteracao;
    }

    setValor(valor : number): void {
        this.valor = valor;
    }

    setHorasSR(horasSR : number): void {
        this.horasSR = horasSR;
    }

    setHorasSC(horasSC : number): void {
        this.horasSC = horasSC;
    }

    setQtdBaias(qtdBaias : number): void {
        this.qtdBaias = qtdBaias;
    }

    setSalaTrabalho(salaTrabalho : string): void {
        this.salaTrabalho = salaTrabalho;
    }

    setTestemunha( testemunha : Testemunha): void {
        this.testemunha = testemunha;
    }
}