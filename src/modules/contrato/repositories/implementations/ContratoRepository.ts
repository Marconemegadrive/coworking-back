import { Repository } from "typeorm";
import { Contrato } from "../../entities/Contrato";
import { ICreateContratoDTO } from "../dtos/ICreateContratoDTO";
import { IUpdateContratoDTO } from "../dtos/UpdateContratoDTO";
import { IContratoRepository } from "../interfaces/IContratoRepository";
import { AppDataSource } from "../../../../shared/database/data-source";

class ContratoRepository implements IContratoRepository{

    private repository: Repository<Contrato>;

    constructor() {
        this.repository = AppDataSource.getRepository(Contrato);
    }

    async create({
        dataInicio,
        dataFinal,
        valor,
        horaSR,
        horaSC,
        qtdBaias,
        salaTrab,
        tipocontrato_idTipoContrato,
        cliente_idCliente
    }: ICreateContratoDTO): Promise<Contrato> {
            
        const contrato = this.repository.create({
            dataInicio,
            dataFinal,
            valor,
            horaSR,
            horaSC,
            qtdBaias,
            salaTrab,
            tipocontrato_idTipoContrato,
            cliente_idCliente
        });
        
        await this.repository.save(contrato);

        return contrato;
    }

    async list(): Promise<Contrato[]> {

        const contratos = await this.repository.find();

        return contratos;
    }

    async findById(idContrato: number): Promise<Contrato> {
        const contratoFound = await this.repository.findOne({ where: { idContrato } });

        return contratoFound;
    }

    async update(idContrato: number, { dataInicio, dataFinal, valor, horaSR, horaSC, qtdBaias, 
        salaTrab, dataAtualizacao}: IUpdateContratoDTO): Promise<Contrato> {

            const contratoUpdated = await this.repository.findOne({ where: { idContrato } });

            if(contratoUpdated) {
                contratoUpdated.dataInicio = dataInicio ? dataInicio : contratoUpdated.dataInicio;
                contratoUpdated.dataFinal = dataFinal ? dataFinal : contratoUpdated.dataFinal;
                contratoUpdated.valor = valor ? valor : contratoUpdated.valor;
                contratoUpdated.horaSR = horaSR ? horaSR : contratoUpdated.horaSR;
                contratoUpdated.horaSC = horaSC ? horaSC : contratoUpdated.horaSC;
                contratoUpdated.qtdBaias = qtdBaias ? qtdBaias : contratoUpdated.qtdBaias;
                contratoUpdated.salaTrab = salaTrab ? salaTrab : contratoUpdated.salaTrab;
                contratoUpdated.dataAtualizacao = new Date();
                
                await this.repository.save(contratoUpdated);

                return contratoUpdated;
        }
    }

    async delete(idContrato: number): Promise<Contrato> {

        const contratoDeleted = await this.repository.findOne({ where: { idContrato } });

        if(contratoDeleted) {
            await this.repository.remove(contratoDeleted);
            
            return contratoDeleted;
        }
    }    
}

export { ContratoRepository };