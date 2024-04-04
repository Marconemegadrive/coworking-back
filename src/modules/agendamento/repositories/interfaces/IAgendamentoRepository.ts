import { Agendamento } from "../../entities/Agendamento";
import { ICreateAgendamentoDTO } from "../dtos/ICreateAgendamentoDTO";


interface IAgendamentoRepository {

    create({
    dataAgendamento,
    horaInicio,
    horaFim,
    autorizacao_idAutorizacao,
    salas_idSala,
    usuario_idUsuario,

    }: ICreateAgendamentoDTO): Promise<Agendamento>;

    list(): Promise<Agendamento[]>;

    findById(idAgendamento: number): Promise<Agendamento>;

    update(
        idAgendamento: number,
        dataAgendamento: Date,
        horaInicio: string,
        horaFim: string,
        autorizacao_idAutorizacao: number,
        salas_idSala: number,
        usuario_idUsuario: number): Promise<Agendamento>;

    delete(idAgendamento: number): Promise<Agendamento>;

}
export { IAgendamentoRepository };