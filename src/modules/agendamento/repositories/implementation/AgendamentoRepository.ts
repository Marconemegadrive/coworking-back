import { Repository } from "typeorm";
import { IAgendamentoRepository } from "../interfaces/IAgendamentoRepository";
import { Agendamento } from "../../entities/Agendamento";
import { AppDataSource } from "../../../../shared/database/data-source";
import { ICreateAgendamentoDTO } from "../dtos/ICreateAgendamentoDTO";


class AgendamentoRepository implements IAgendamentoRepository {

    private repository: Repository<Agendamento>;

    constructor() {
        this.repository = AppDataSource.getRepository(Agendamento);
    }

    async create({ 
        dataAgendamento,
        horaInicio,
        horaFim,
        autorizacao_idAutorizacao,
        salas_idSala,
        usuario_idUsuario }: ICreateAgendamentoDTO): Promise<Agendamento> {

            const agendamento = this.repository.create({
               
                dataAgendamento,
                horaInicio,
                horaFim,
                autorizacao_idAutorizacao,
                salas_idSala,
                usuario_idUsuario,
                dataCriacao : new Date(),


            });

            await this.repository.save(agendamento);

            return agendamento;
    }

    async list() : Promise<Agendamento[]> {

        const agendamentoAll = await this.repository.find();

        return agendamentoAll;
    }

    async findById(idAgendamento: number): Promise<Agendamento> {

        const agendamentoFound = await this.repository.findOne({ where: {idAgendamento}});

        return agendamentoFound;
        
    }

    async update(
        idAgendamento: number,
        dataAgendamento: Date,
        horaInicio: string,
        horaFim: string,
        autorizacao_idAutorizacao: number,
        salas_idSala: number,
        usuario_idUsuario: number,): Promise<Agendamento> {

            const agendamentoUpdated = await this.repository.findOne({ where: {idAgendamento}});

            if(agendamentoUpdated) {
                agendamentoUpdated.dataAgendamento = dataAgendamento ? dataAgendamento : agendamentoUpdated.dataAgendamento;
                agendamentoUpdated.horaInicio = horaInicio ? horaInicio : agendamentoUpdated.horaInicio;
                agendamentoUpdated.horaFim = horaFim ? horaFim : agendamentoUpdated.horaFim;
                agendamentoUpdated.autorizacao_idAutorizacao = autorizacao_idAutorizacao ? autorizacao_idAutorizacao : agendamentoUpdated.autorizacao_idAutorizacao;
                agendamentoUpdated.salas_idSala = salas_idSala ? salas_idSala : agendamentoUpdated.salas_idSala;
                agendamentoUpdated.usuario_idUsuario = usuario_idUsuario ? usuario_idUsuario : agendamentoUpdated.usuario_idUsuario;
                agendamentoUpdated.dataAlteracao = new Date();

                await this.repository.save(agendamentoUpdated);

                return agendamentoUpdated;
            }
        }

        async delete(idAgendamento: number): Promise<Agendamento> {

            const agendamentoDelete = await this.repository.findOne({ where: {idAgendamento}});

            if(agendamentoDelete) {
                await this.repository.remove(agendamentoDelete);
                return agendamentoDelete;
            
            }
        }
}

export { AgendamentoRepository };