import { container } from "tsyringe";

import { INivelAcessoRepository } from "../../modules/usuario/repositories/interfaces/INivelAcessoRepository";
import { NivelAcessoRepository } from "../../modules/usuario/repositories/implementations/NivelAcessoRepository";

import { IUsuarioRepository } from "../../modules/usuario/repositories/interfaces/IUsuarioRepository";
import { UsuarioRepository } from "../../modules/usuario/repositories/implementations/UsuarioRepository";

import { IStatusClienteRepository } from "../../modules/cliente/repositories/interfaces/IStatusClienteRepository";
import { StatusClienteRepository } from "../../modules/cliente/repositories/implementations/StatusClienteRepository";

import { IClienteRepository } from "../../modules/cliente/repositories/interfaces/IClienteRepository";
import { ClienteRepository } from "../../modules/cliente/repositories/implementations/ClienteRepository";

import { IClientePjRepository } from "../../modules/cliente/repositories/interfaces/IClientePjRepository";
import { ClientePjRepository } from "../../modules/cliente/repositories/implementations/ClientePjRepository";
import { IFuncionarioRepository } from "../../modules/funcionario/repositories/interfaces/IFuncionarioRepository";
import { FuncionarioRepository } from "../../modules/funcionario/repositories/implementations/FuncionarioRepository";

import { ITipoSalasRepository } from "../../modules/salas/repositories/interfaces/ITipoSalasRepository";
import { TipoSalasRepository } from "../../modules/salas/repositories/implementation/TipoSalasRepository";

import { ITipoAutorizacaoRepository } from "../../modules/autorizacao/repositories/interfaces/ITipoAutorizacaoRepository";
import { TipoAutorizacaoRepository } from "../../modules/autorizacao/repositories/implementation/TipoAutorizacaoRepository";
import { IStatusSalasRepository } from "../../modules/salas/repositories/interfaces/IStatusSalasRepository";
import { StatusSalasRepository } from "../../modules/salas/repositories/implementation/StatusSalasRepository";

import { ITipoContratoRepository } from "../../modules/tipoContrato/repositories/interfaces/ITipoContratoRepository";
import { TipoContratoRepository } from "../../modules/tipoContrato/repositories/implementations/TipoContratoRepository";

import { ITestemunhaRepository } from "../../modules/testemunha/repositories/interfaces/ITestemunhaRepository";
import { TestemunhaRepository } from "../../modules/testemunha/repositories/implementations/TestemunhaRepository";

import { IClienteCpfRepository } from "../../modules/cliente/repositories/interfaces/IClienteCpfRepository";
import { ClienteCpfRepository } from "../../modules/cliente/repositories/implementations/ClienteCpfRepository";

import { IEnderecoRepository } from "../../modules/endereco/repositories/interface/IEnderecoRepository";
import { EnderecoRepository } from "../../modules/endereco/repositories/implementations/EnderecoRepository";

import { ITelefoneRepository } from "../../modules/telefone/repositories/interfaces/ITelefoneRepository";
import { TelefoneRepository } from "../../modules/telefone/repositories/implementations/TelefoneRepository";

import { IContratoRepository } from "../../modules/contrato/repositories/interfaces/IContratoRepository";
import { ContratoRepository } from "../../modules/contrato/repositories/implementations/ContratoRepository";

import { ITestemunha_has_ContratoRepository } from "../../modules/testemunha_has_contrato/repositories/interfaces/ITestemunha_has_ContratoRepository";
import { Testemunha_has_ContratoRepository } from "../../modules/testemunha_has_contrato/repositories/implementations/Testemunha_has_ContratoRepository";

import { IAutorizacaoRepository } from "../../modules/autorizacao/repositories/interfaces/IAutorizacaoRepository";
import { AutorizacaoRepository } from "../../modules/autorizacao/repositories/implementation/AutorizacaoRepository";

import { IEmailRepository } from "../../modules/email/repositories/interfaces/IEmailRepository";
import { EmailRepository } from "../../modules/email/repositories/implementations/EmailRepository";

import { ISalasRepository } from "../../modules/salas/repositories/interfaces/ISalasRepository";
import { SalasRepository } from "../../modules/salas/repositories/implementation/SalasRepository";

import { IAgendamentoRepository } from "../../modules/agendamento/repositories/interfaces/IAgendamentoRepository";
import { AgendamentoRepository } from "../../modules/agendamento/repositories/implementation/AgendamentoRepository";



container.registerSingleton<INivelAcessoRepository>(
    "NivelAcessoRepository",
    NivelAcessoRepository
);

container.registerSingleton<IUsuarioRepository>(
    "UsuarioRepository",
    UsuarioRepository
);

container.registerSingleton<IStatusClienteRepository>(
    "StatusClienteRepository",
    StatusClienteRepository
);

container.registerSingleton<IClienteRepository>(
    "ClienteRepository",
    ClienteRepository,
);

container.registerSingleton<IClientePjRepository>(
    "ClientePjRepository",
    ClientePjRepository
);

container.registerSingleton<IClienteCpfRepository>(
    "ClienteCpfRepository",
    ClienteCpfRepository
);

container.registerSingleton<IFuncionarioRepository>(
    "FuncionarioRepository",
    FuncionarioRepository
);

container.registerSingleton<ITipoSalasRepository>(
    "TipoSalasRepository",
    TipoSalasRepository
);

container.registerSingleton<ITipoAutorizacaoRepository>(
    "TipoAutorizacaoRepository",
    TipoAutorizacaoRepository
);

container.registerSingleton<IStatusSalasRepository>(
    "StatusSalasRepository",
    StatusSalasRepository
);

container.registerSingleton<ITipoContratoRepository>(
    "TipoContratoRepository",
    TipoContratoRepository
);

container.registerSingleton<ITestemunhaRepository>(
    "TestemunhaRepository",
    TestemunhaRepository  
);

container.registerSingleton<IEnderecoRepository>(
    "EnderecoRepository",
    EnderecoRepository  
);

container.registerSingleton<ITelefoneRepository>(
    "TelefoneRepository",
    TelefoneRepository  
);

container.registerSingleton<IEmailRepository>(
    "EmailRepository",
    EmailRepository
)

container.registerSingleton<IAutorizacaoRepository>(
    "AutorizacaoRepository",
    AutorizacaoRepository  
);

container.registerSingleton<IContratoRepository>(
    "ContratoRepository",
    ContratoRepository
);

container.registerSingleton<ITestemunha_has_ContratoRepository>(
    "Testemunha_has_ContratoRepository",
    Testemunha_has_ContratoRepository
);

container.registerSingleton<ISalasRepository>(
    "SalasRepository",
    SalasRepository
)

container.registerSingleton<IAgendamentoRepository>(
    "AgendamentoRepository",
    AgendamentoRepository
)