import "reflect-metadata"
import { DataSource } from "typeorm"
import { NivelAcesso } from "../../modules/usuario/entities/NivelAcesso"
import { Usuario } from "../../modules/usuario/entities/Usuario"
import { StatusCliente } from "../../modules/cliente/entities/StatusCliente"
import { Cliente } from "../../modules/cliente/entities/Cliente"
import { ClientePj } from "../../modules/cliente/entities/ClientePj"
import { Funcionario } from "../../modules/funcionario/entities/Funcionario"
import { ClienteCpf } from "../../modules/cliente/entities/ClienteCpf"
import { TipoSalas } from "../../modules/salas/entities/TipoSalas"
import { TipoAutorizacao } from "../../modules/autorizacao/entities/TipoAutorizacao"
import { StatusSalas } from "../../modules/salas/entities/StatusSalas"
import { TipoContrato } from "../../modules/tipoContrato/entities/TipoContrato"
import { Testemunha } from "../../modules/testemunha/entities/Testemunha"
import { Endereco } from "../../modules/endereco/entities/Endereco"
import { Telefone } from "../../modules/telefone/entities/Telefone"
import { Autorizacao } from "../../modules/autorizacao/entities/Autorizacao"
import { Contrato } from "../../modules/contrato/entities/Contrato"
import { Testemunha_has_Contrato } from "../../modules/testemunha_has_contrato/entities/Testemunha_has_Contrato"
import { RecebimentoEncomenda } from "../../modules/recebimentoEncomenda/entities/RecebimentoEncomenda"
import { Representante } from "../../modules/representante/entities/Representante"
import { Encomenda } from "../../modules/encomenda/entities/Encomenda"
import { RetiradaEncomenda } from "../../modules/retiradaEncomenda/entities/RetiradaEncomenda"
import { EnderecoFiscal } from "../../modules/enderecoFiscal/entities/EnderecoFiscal"
import { Email } from "../../modules/email/entities/Email"
import { Agendamento } from "../../modules/agendamento/entities/Agendamento"
import { Salas } from "../../modules/salas/entities/Salas"



export const AppDataSource = new DataSource({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "admin",
    password: "Softexback2023!$",
    database: "mscoworking",
    // synchronize: true,
    logging: false,
    entities: [NivelAcesso, Usuario, StatusCliente, Cliente, ClientePj, ClienteCpf, Funcionario, TipoSalas, 
            TipoAutorizacao, StatusSalas, TipoContrato, Testemunha, Endereco, Autorizacao, Telefone, Contrato, 
            Testemunha_has_Contrato, Representante, Encomenda, RetiradaEncomenda, RecebimentoEncomenda, 
            EnderecoFiscal, Email, Salas, Agendamento],
    migrations: [],
    subscribers: [],
})
