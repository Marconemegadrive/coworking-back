interface IUpdateContratoDTO {
    dataInicio?: Date;
    dataFinal?: Date;
    valor?: number;
    horaSR?: number;
    horaSC?: number;
    qtdBaias?: number;
    salaTrab?: number;
    dataAtualizacao: Date;
}

export { IUpdateContratoDTO };