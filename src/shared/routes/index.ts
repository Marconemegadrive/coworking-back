import { Router } from "express";
import { nivelAcessoRoutes } from "./nivelAcesso.routes";
import { usuarioRoutes } from "./usuario.routes";
import { statusClienteRoutes } from "./statusCliente.routes";
import { clienteRoutes } from "./cliente.routes";
import { clientePjRoutes } from "./clientePj.routes";
import { funcionarioRoutes } from "./funcionario.routes";
import { tipoSalasRoutes } from "./tipoSalas.routes";
import { tipoAutorizacaoRouter } from "./tipoAutorizacao.routes";
import { tipoContratoRoutes } from "./tipoContrato.routes";
import { testemunhaRoutes } from "./testemunha.routes";
import { clienteCpfRoutes } from "./clienteCpf.routes";
import { enderecoRoutes } from "./endereco.routes";
import { statusSalasRoutes } from "./statusSalas.routes";
import { telefoneRoutes } from "./telefone.routes";
import { contratoRoutes } from "./contrato.routes";
import { testemunha_has_ContratoRoutes } from "./testemunha_has_Contrato.routes";
import { emailRoutes } from "./email.routes";
import { agendamentoRoutes } from "./agendamento.routes";
import { encomendaRoutes } from "./encomenda.routes";
import { retiradaEncomendaRoutes } from "./retiradaEncomenda.routes";
import { recebimentoEncomendaRoutes } from "./recebimentoEncomenda.routes";
import { representanteRoutes } from "./representante.routes"; 
import { enderecoFiscalRoutes } from "./enderecoFiscal.routes";


const router = Router();

router.use("/nivelAcesso", nivelAcessoRoutes);
router.use("/usuario", usuarioRoutes);
router.use("/statusCliente", statusClienteRoutes);
router.use("/cliente", clienteRoutes);
router.use("/clientePj", clientePjRoutes);
router.use("/clienteCpf", clienteCpfRoutes);
router.use("/funcionario", funcionarioRoutes);
router.use("/tipoSalas", tipoSalasRoutes);
router.use("/tipoAutorizacao", tipoAutorizacaoRouter);
router.use("/tipoContrato", tipoContratoRoutes);
router.use("/testemunha", testemunhaRoutes);
router.use("/endereco", enderecoRoutes);
router.use("/statusSalas", statusSalasRoutes);
router.use("/telefone", telefoneRoutes);
router.use("/contrato", contratoRoutes);
router.use("/testemunhaContrato", testemunha_has_ContratoRoutes);
router.use("/email", emailRoutes);
router.use("/agendamento", agendamentoRoutes);
router.use("/encomenda", encomendaRoutes);
router.use("/retiradaEncomenda", retiradaEncomendaRoutes);
router.use("/recebimentoEncomenda", recebimentoEncomendaRoutes);
router.use("/representante", representanteRoutes);
router.use("/enderecoFiscal", enderecoFiscalRoutes);


export { router };