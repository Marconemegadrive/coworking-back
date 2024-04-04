interface ICreateContratoDTO {
    dataInicio: Date;
    dataFinal: Date;
    valor: number;
    horaSR: number;
    horaSC: number;
    qtdBaias: number;
    salaTrab: number;
    tipocontrato_idTipoContrato: number;
    cliente_idCliente: number;
}

export { ICreateContratoDTO };