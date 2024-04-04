interface ICreateAgendamentoDTO {

    dataAgendamento: Date;
    horaInicio: string;
    horaFim: string;
    //dataCriacao: Date;
    //dataAlteracao: Date;
    autorizacao_idAutorizacao: number;
    salas_idSala: number;
    usuario_idUsuario: number;

}
export { ICreateAgendamentoDTO };