import { Testemunha_has_Contrato } from "../../entities/Testemunha_has_Contrato";
import { ICreateTestemunha_has_ContratoDTO } from "../dtos/ICreateTestemunha_has_ContratoDTO";

interface ITestemunha_has_ContratoRepository {

    create({ Testemunha_idTestemunha, Contrato_idContrato }: ICreateTestemunha_has_ContratoDTO): Promise<Testemunha_has_Contrato>;

    list(): Promise<Testemunha_has_Contrato[]>;

    findById(Testemunha_idTestemunha: number): Promise<Testemunha_has_Contrato[]>;

    delete(Testemunha_idTestemunha: number, Contrato_idContrato: number): Promise<Testemunha_has_Contrato>;
}

export { ITestemunha_has_ContratoRepository };