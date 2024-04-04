-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema mscoworking
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema mscoworking
-- -----------------------------------------------------

CREATE SCHEMA IF NOT EXISTS `mscoworking` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci ;
USE `mscoworking` ;

-- -----------------------------------------------------
-- Table `mscoworking`.`tipoAutorizacao`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mscoworking`.`tipoAutorizacao` (
  `idtipoAutorizacao` INT NOT NULL,
  `tipoAutorizacao` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`idtipoAutorizacao`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mscoworking`.`statuscliente`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mscoworking`.`statuscliente` (
  `idStatusCliente` INT NOT NULL AUTO_INCREMENT,
  `tipo` VARCHAR(90) NOT NULL,
  PRIMARY KEY (`idStatusCliente`))
ENGINE = InnoDB
AUTO_INCREMENT = 5
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `mscoworking`.`cliente`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mscoworking`.`cliente` (
  `idCliente` INT NOT NULL AUTO_INCREMENT,
  `contrato` VARCHAR(45) NOT NULL,
  `StatusCliente_idStatusCliente` INT NULL DEFAULT NULL,
  `dataCriacao` DATETIME NULL,
  `dataAtualizacao` DATETIME NULL,
  PRIMARY KEY (`idCliente`),
  INDEX `FK_66dfb90840ce99722ff3f1479fe` (`StatusCliente_idStatusCliente` ASC),
  CONSTRAINT `FK_66dfb90840ce99722ff3f1479fe`
    FOREIGN KEY (`StatusCliente_idStatusCliente`)
    REFERENCES `mscoworking`.`statuscliente` (`idStatusCliente`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `mscoworking`.`clientepj`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mscoworking`.`clientepj` (
  `cnpj` VARCHAR(14) NOT NULL,
  `razaoSocial` VARCHAR(70) NOT NULL,
  `nomeFatasia` VARCHAR(70) NOT NULL,
  `dataFundacao` DATE NOT NULL,
  `Cliente_idCliente` INT NULL DEFAULT NULL,
  PRIMARY KEY (`cnpj`),
  UNIQUE INDEX `REL_564c1a2ee8dda8d71afceba5be` (`Cliente_idCliente` ASC),
  CONSTRAINT `FK_564c1a2ee8dda8d71afceba5be3`
    FOREIGN KEY (`Cliente_idCliente`)
    REFERENCES `mscoworking`.`cliente` (`idCliente`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `mscoworking`.`nivelAcesso`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mscoworking`.`nivelAcesso` (
  `idAcesso` INT NOT NULL AUTO_INCREMENT,
  `nome` VARCHAR(45) NOT NULL,
  `nivel` INT(2) NOT NULL,
  PRIMARY KEY (`idAcesso`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mscoworking`.`usuario`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mscoworking`.`usuario` (
  `idUsuario` INT NOT NULL AUTO_INCREMENT,
  `login` VARCHAR(70) NOT NULL,
  `senha` VARCHAR(45) NOT NULL,
  `tipoUsuario` TINYINT NOT NULL,
  `acessoAdm` TINYINT NOT NULL,
  `nivelAcesso_idAcesso` INT NOT NULL,
  `dataCriacao` DATETIME NULL,
  `dataAtualizacao` DATETIME NULL,
  PRIMARY KEY (`idUsuario`),
  UNIQUE INDEX `IDX_4f59ed0a82c355222163b1139a` (`login` ASC),
  INDEX `fk_usuario_nivelAcesso1_idx` (`nivelAcesso_idAcesso` ASC),
  CONSTRAINT `fk_usuario_nivelAcesso1`
    FOREIGN KEY (`nivelAcesso_idAcesso`)
    REFERENCES `mscoworking`.`nivelAcesso` (`idAcesso`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `mscoworking`.`representante`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mscoworking`.`representante` (
  `cpfRepresentante` VARCHAR(11) NOT NULL,
  `nome` VARCHAR(70) NOT NULL,
  `email` VARCHAR(45) NOT NULL,
  `telefone` VARCHAR(45) NOT NULL,
  `funcao` VARCHAR(45) NULL,
  `clientepj_cnpj` VARCHAR(14) NOT NULL,
  `usuario_idUsuario` INT NOT NULL,
  PRIMARY KEY (`cpfRepresentante`),
  INDEX `fk_representante_clientepj_idx` (`clientepj_cnpj` ASC),
  INDEX `fk_representante_usuario1_idx` (`usuario_idUsuario` ASC),
  CONSTRAINT `fk_representante_clientepj`
    FOREIGN KEY (`clientepj_cnpj`)
    REFERENCES `mscoworking`.`clientepj` (`cnpj`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_representante_usuario1`
    FOREIGN KEY (`usuario_idUsuario`)
    REFERENCES `mscoworking`.`usuario` (`idUsuario`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mscoworking`.`enderecoFiscal`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mscoworking`.`enderecoFiscal` (
  `idEndFiscal` INT NOT NULL AUTO_INCREMENT,
  `statusEndFiscal` TINYINT NOT NULL,
  `dataCriacao` DATETIME NULL,
  `dataAtualizacao` DATETIME NULL,
  `cliente_idCliente` INT NOT NULL,
  PRIMARY KEY (`idEndFiscal`, `cliente_idCliente`),
  INDEX `fk_enderecoFiscal_cliente1_idx` (`cliente_idCliente` ASC),
  CONSTRAINT `fk_enderecoFiscal_cliente1`
    FOREIGN KEY (`cliente_idCliente`)
    REFERENCES `mscoworking`.`cliente` (`idCliente`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mscoworking`.`encomenda`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mscoworking`.`encomenda` (
  `idEncomenda` INT NOT NULL AUTO_INCREMENT,
  `obsEncomenda` VARCHAR(100) NOT NULL,
  `dataCriacao` DATETIME NULL,
  `dataAtualizacao` DATETIME NULL,
  `enderecoFiscal_idEndFiscal` INT NOT NULL,
  `enderecoFiscal_cliente_idCliente` INT NOT NULL,
  PRIMARY KEY (`idEncomenda`),
  INDEX `fk_encomenda_enderecoFiscal1_idx` (`enderecoFiscal_idEndFiscal` ASC, `enderecoFiscal_cliente_idCliente` ASC),
  CONSTRAINT `fk_encomenda_enderecoFiscal1`
    FOREIGN KEY (`enderecoFiscal_idEndFiscal` , `enderecoFiscal_cliente_idCliente`)
    REFERENCES `mscoworking`.`enderecoFiscal` (`idEndFiscal` , `cliente_idCliente`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mscoworking`.`recebimentoEncomenda`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mscoworking`.`recebimentoEncomenda` (
  `idRecebimentoEncomenda` INT NOT NULL AUTO_INCREMENT,
  `dataHora` DATETIME NOT NULL,
  `obsRecEncomenda` VARCHAR(100) NOT NULL,
  `encomenda_idEncomenda` INT NOT NULL,
  PRIMARY KEY (`idRecebimentoEncomenda`),
  INDEX `fk_recebimentoEncomenda_encomenda1_idx` (`encomenda_idEncomenda` ASC),
  CONSTRAINT `fk_recebimentoEncomenda_encomenda1`
    FOREIGN KEY (`encomenda_idEncomenda`)
    REFERENCES `mscoworking`.`encomenda` (`idEncomenda`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mscoworking`.`retiradaEncomenda`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mscoworking`.`retiradaEncomenda` (
  `idRetiradaEncomenda` INT NOT NULL AUTO_INCREMENT,
  `dataHora` DATETIME NOT NULL,
  `obsRetEncomenda` VARCHAR(100) NOT NULL,
  `encomenda_idEncomenda` INT NOT NULL,
  PRIMARY KEY (`idRetiradaEncomenda`),
  INDEX `fk_retiradaEncomenda_encomenda1_idx` (`encomenda_idEncomenda` ASC),
  CONSTRAINT `fk_retiradaEncomenda_encomenda1`
    FOREIGN KEY (`encomenda_idEncomenda`)
    REFERENCES `mscoworking`.`encomenda` (`idEncomenda`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;

USE `mscoworking` ;

-- -----------------------------------------------------
-- Table `mscoworking`.`funcionario`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mscoworking`.`funcionario` (
  `cpf` VARCHAR(11) NOT NULL,
  `nome` VARCHAR(45) NOT NULL,
  `email` VARCHAR(45) NOT NULL,
  `telefones` VARCHAR(45) NOT NULL,
  `funcao` VARCHAR(45) NULL,
  `usuario_idUsuario` INT NOT NULL,
  `dataCriacao` DATETIME NULL,
  `dataAtualizacao` DATETIME NULL,
  PRIMARY KEY (`cpf`),
  UNIQUE INDEX `IDX_6b76bc03060737405ae6a66301` (`telefones` ASC),
  UNIQUE INDEX `IDX_f868493b618f6780e84ea266e5` (`email` ASC),
  INDEX `fk_funcionario_usuario1_idx` (`usuario_idUsuario` ASC),
  CONSTRAINT `fk_funcionario_usuario1`
    FOREIGN KEY (`usuario_idUsuario`)
    REFERENCES `mscoworking`.`usuario` (`idUsuario`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `mscoworking`.`autorizacao`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mscoworking`.`autorizacao` (
  `idAutorizacao` INT NOT NULL AUTO_INCREMENT,
  `obs` VARCHAR(45) NOT NULL,
  `dataCriacao` DATETIME NOT NULL,
  `dataAtualizacao` DATETIME NOT NULL,
  `funcionario_cpf` VARCHAR(11) NOT NULL,
  `tipoAutorizacao_idtipoAutorizacao` INT NOT NULL,
  PRIMARY KEY (`idAutorizacao`),
  UNIQUE INDEX `IDX_4fd4304856e95b7136a8e9bdd2` (`funcionario_cpf` ASC),
  INDEX `fk_autorizacao_tipoAutorizacao1_idx` (`tipoAutorizacao_idtipoAutorizacao` ASC),
  CONSTRAINT `FK_4fd4304856e95b7136a8e9bdd2a`
    FOREIGN KEY (`funcionario_cpf`)
    REFERENCES `mscoworking`.`funcionario` (`cpf`),
  CONSTRAINT `fk_autorizacao_tipoAutorizacao1`
    FOREIGN KEY (`tipoAutorizacao_idtipoAutorizacao`)
    REFERENCES `mscoworking`.`tipoAutorizacao` (`idtipoAutorizacao`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `mscoworking`.`tiposalas`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mscoworking`.`tiposalas` (
  `idTipoSalas` INT NOT NULL AUTO_INCREMENT,
  `tipo` VARCHAR(80) NOT NULL,
  PRIMARY KEY (`idTipoSalas`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `mscoworking`.`statussalas`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mscoworking`.`statussalas` (
  `idStatus` INT NOT NULL AUTO_INCREMENT,
  `tipo` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`idStatus`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `mscoworking`.`salas`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mscoworking`.`salas` (
  `idSala` INT NOT NULL AUTO_INCREMENT,
  `nome` VARCHAR(70) NOT NULL,
  `qtdPessoas` INT NOT NULL,
  `obs` VARCHAR(90) NULL DEFAULT NULL,
  `StatusSalas_idStatus1` INT NULL DEFAULT NULL,
  `TipoSalas_idTipoSalas1` INT NULL DEFAULT NULL,
  `dataCriacao` DATETIME NOT NULL,
  `dataAtualizacao` DATETIME NOT NULL,
  PRIMARY KEY (`idSala`),
  INDEX `FK_f3c53a24a57c9a8973bc3626cee` (`StatusSalas_idStatus1` ASC),
  INDEX `FK_e968fa2a163171222613b6bdc15` (`TipoSalas_idTipoSalas1` ASC),
  CONSTRAINT `FK_e968fa2a163171222613b6bdc15`
    FOREIGN KEY (`TipoSalas_idTipoSalas1`)
    REFERENCES `mscoworking`.`tiposalas` (`idTipoSalas`),
  CONSTRAINT `FK_f3c53a24a57c9a8973bc3626cee`
    FOREIGN KEY (`StatusSalas_idStatus1`)
    REFERENCES `mscoworking`.`statussalas` (`idStatus`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `mscoworking`.`agendamento`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mscoworking`.`agendamento` (
  `idAgendamento` INT NOT NULL AUTO_INCREMENT,
  `horaInicio` TIME NOT NULL,
  `horaFim` TIME NOT NULL,
  `dataAgendamento` DATE NOT NULL,
  `dataCriacao` DATETIME NOT NULL,
  `dataAlteracao` DATETIME NOT NULL,
  `autorizacao_idAutorizacao` INT NOT NULL,
  `salas_idSala` INT NOT NULL,
  `usuario_idUsuario` INT NOT NULL,
  PRIMARY KEY (`idAgendamento`),
  INDEX `fk_agendamento_autorizacao1_idx` (`autorizacao_idAutorizacao` ASC),
  INDEX `fk_agendamento_salas1_idx` (`salas_idSala` ASC),
  INDEX `fk_agendamento_usuario1_idx` (`usuario_idUsuario` ASC),
  CONSTRAINT `fk_agendamento_autorizacao1`
    FOREIGN KEY (`autorizacao_idAutorizacao`)
    REFERENCES `mscoworking`.`autorizacao` (`idAutorizacao`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_agendamento_salas1`
    FOREIGN KEY (`salas_idSala`)
    REFERENCES `mscoworking`.`salas` (`idSala`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_agendamento_usuario1`
    FOREIGN KEY (`usuario_idUsuario`)
    REFERENCES `mscoworking`.`usuario` (`idUsuario`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
AUTO_INCREMENT = 5
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `mscoworking`.`clientepf`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mscoworking`.`clientepf` (
  `cpf` VARCHAR(11) NOT NULL,
  `nome` VARCHAR(70) NOT NULL,
  `dataNasc` DATE NOT NULL,
  `Cliente_idCliente` INT NULL DEFAULT NULL,
  `usuario_idUsuario` INT NOT NULL,
  PRIMARY KEY (`cpf`),
  UNIQUE INDEX `REL_9c55a69cf7a91d08de0afd3090` (`Cliente_idCliente` ASC),
  INDEX `fk_clientepf_usuario1_idx` (`usuario_idUsuario` ASC),
  CONSTRAINT `FK_9c55a69cf7a91d08de0afd3090f`
    FOREIGN KEY (`Cliente_idCliente`)
    REFERENCES `mscoworking`.`cliente` (`idCliente`),
  CONSTRAINT `fk_clientepf_usuario1`
    FOREIGN KEY (`usuario_idUsuario`)
    REFERENCES `mscoworking`.`usuario` (`idUsuario`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `mscoworking`.`tipocontrato`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mscoworking`.`tipocontrato` (
  `idTipoContrato` INT NOT NULL,
  `descricao` VARCHAR(80) NOT NULL,
  PRIMARY KEY (`idTipoContrato`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `mscoworking`.`contrato`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mscoworking`.`contrato` (
  `idContrato` INT NOT NULL AUTO_INCREMENT,
  `dataInicio` DATE NOT NULL,
  `dataFinal` DATE NOT NULL,
  `valor` FLOAT NOT NULL,
  `horaSR` INT NOT NULL,
  `horaSC` INT NOT NULL,
  `qtdBaias` INT NOT NULL,
  `salaTrab` INT NOT NULL,
  `dataCriacao` DATETIME NOT NULL,
  `dataAtualizacao` DATETIME NOT NULL,
  `tipocontrato_idTipoContrato` INT NOT NULL,
  `cliente_idCliente` INT NOT NULL,
  PRIMARY KEY (`idContrato`),
  INDEX `fk_contrato_tipocontrato1_idx` (`tipocontrato_idTipoContrato` ASC),
  INDEX `fk_contrato_cliente1_idx` (`cliente_idCliente` ASC),
  CONSTRAINT `fk_contrato_tipocontrato1`
    FOREIGN KEY (`tipocontrato_idTipoContrato`)
    REFERENCES `mscoworking`.`tipocontrato` (`idTipoContrato`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_contrato_cliente1`
    FOREIGN KEY (`cliente_idCliente`)
    REFERENCES `mscoworking`.`cliente` (`idCliente`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `mscoworking`.`email`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mscoworking`.`email` (
  `idEmail` INT NOT NULL AUTO_INCREMENT,
  `email` VARCHAR(45) NULL DEFAULT NULL,
  `Cliente_idCliente` INT NULL DEFAULT NULL,
  `Funcionario_cpf` VARCHAR(11) NULL DEFAULT NULL,
  PRIMARY KEY (`idEmail`),
  INDEX `FK_84aa13c24755dd052616b057f33` (`Cliente_idCliente` ASC),
  INDEX `FK_aed2339d869152829f1aefa41bf` (`Funcionario_cpf` ASC),
  CONSTRAINT `FK_84aa13c24755dd052616b057f33`
    FOREIGN KEY (`Cliente_idCliente`)
    REFERENCES `mscoworking`.`cliente` (`idCliente`),
  CONSTRAINT `FK_aed2339d869152829f1aefa41bf`
    FOREIGN KEY (`Funcionario_cpf`)
    REFERENCES `mscoworking`.`funcionario` (`cpf`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `mscoworking`.`endereco`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mscoworking`.`endereco` (
  `idEndereco` INT NOT NULL AUTO_INCREMENT,
  `uf` VARCHAR(2) NOT NULL,
  `cep` VARCHAR(08) NOT NULL,
  `cidade` VARCHAR(45) NOT NULL,
  `bairro` VARCHAR(45) NOT NULL,
  `rua` VARCHAR(45) NOT NULL,
  `numero` VARCHAR(45) NOT NULL,
  `complemento` VARCHAR(45) NOT NULL,
  `obs` VARCHAR(45) NULL DEFAULT NULL,
  `cliente_idCliente` INT NOT NULL,
  PRIMARY KEY (`idEndereco`),
  INDEX `fk_endereco_cliente1_idx` (`cliente_idCliente` ASC),
  CONSTRAINT `fk_endereco_cliente1`
    FOREIGN KEY (`cliente_idCliente`)
    REFERENCES `mscoworking`.`cliente` (`idCliente`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `mscoworking`.`telefone`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mscoworking`.`telefone` (
  `idTelefone` INT NOT NULL AUTO_INCREMENT,
  `telefone` VARCHAR(45) NOT NULL,
  `Cliente_idCliente` INT NULL DEFAULT NULL,
  `Funcionario_cpf1` VARCHAR(11) NULL DEFAULT NULL,
  PRIMARY KEY (`idTelefone`),
  INDEX `FK_4169829a1250a21a901f78e8a7b` (`Cliente_idCliente` ASC),
  INDEX `FK_968f75c4ad5cb91a2b4a26ac755` (`Funcionario_cpf1` ASC),
  CONSTRAINT `FK_4169829a1250a21a901f78e8a7b`
    FOREIGN KEY (`Cliente_idCliente`)
    REFERENCES `mscoworking`.`cliente` (`idCliente`),
  CONSTRAINT `FK_968f75c4ad5cb91a2b4a26ac755`
    FOREIGN KEY (`Funcionario_cpf1`)
    REFERENCES `mscoworking`.`funcionario` (`cpf`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `mscoworking`.`testemunha`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mscoworking`.`testemunha` (
  `idTestemunha` INT NOT NULL AUTO_INCREMENT,
  `nome` VARCHAR(45) NOT NULL,
  `cpf` VARCHAR(11) NULL DEFAULT NULL,
  PRIMARY KEY (`idTestemunha`),
  UNIQUE INDEX `IDX_44d25fc4af495e6240411e3cd6` (`cpf` ASC))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `mscoworking`.`testemunha_has_contrato`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mscoworking`.`testemunha_has_contrato` (
  `Testemunha_idTestemunha` INT NOT NULL,
  `Contrato_idContrato` INT NOT NULL,
  PRIMARY KEY (`Testemunha_idTestemunha`, `Contrato_idContrato`),
  INDEX `FK_ca70891cf68e1a74c1a9b028bce` (`Contrato_idContrato` ASC),
  CONSTRAINT `FK_277cfd55db4548c68073cc404f4`
    FOREIGN KEY (`Testemunha_idTestemunha`)
    REFERENCES `mscoworking`.`testemunha` (`idTestemunha`),
  CONSTRAINT `FK_ca70891cf68e1a74c1a9b028bce`
    FOREIGN KEY (`Contrato_idContrato`)
    REFERENCES `mscoworking`.`contrato` (`idContrato`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
