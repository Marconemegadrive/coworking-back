# API - Mangue Space Coworking

Este projeto de desenvolvimento de um API é parte integrante da Formação Acelerada em Programação da empresa Softex Pernambuco. O objetivo principal é desenvolver uma aplicação robusta que gerencie as operações de um espaço de coworking, com foco nas funcionalidades back-end e front-end.

<br>

## Status do Projeto

 ![Projeto Em Desenvolvimento](http://img.shields.io/static/v1?label=STATUS&message=EM%20DESENVOLVIMENTO&color=GREEN&style=for-the-badge)

<br>

## Índice

- [Tecnologias Utilizadas](#Tecnologias-Utilizadas)
- [Funcionalidades Principais](#Funcionalidades-Principais)
- [Metodologia de Desenvolvimento](#Metodologia-de-Desenvolvimento)
- [Requisitos para Conclusão](#Requisitos-para-Conclusão)
- [Configuração para uso do projeto](#Configuração-para-uso-do-projeto)

<br>

## Tecnologias Utilizadas

- **Node.js**: Ambiente de execução JavaScript no servidor;
- **TypeScript (TS)**: Linguagem que adiciona tipagem estática ao JavaScript, proporcionando mais segurança e manutenibilidade.
- **JavaScript (JS)**: Utilizado para a programação do lado do cliente e do servidor.
- **MySQL**: Sistema de gerenciamento de banco de dados relacional.
- **Express**: Framework web para Node.js, simplificando a construção de aplicativos web robustos.

<br>

## Funcionalidades Principais

- **Gestão de Usuários**: Cadastro, autenticação e autorização de usuários, permitindo diferentes níveis de acesso.
- **Reservas de Espaço**: Sistema para agendamento de estações de trabalho, salas de reunião e outros recursos disponíveis no coworking.
- **Faturamento e Pagamentos**: Integração com meios de pagamento para faturamento das reservas e controle financeiro. (*<u>a implementar</u>*)
- **Monitoramento de Utilização**: Acompanhamento do uso dos espaços, proporcionando insights sobre a ocupação e demanda.
- **Caixa postal**: Clientes podem utilizar serviço de endereço fiscal para recebimento de correspondências.
- **Integração com Front-End**: Desenvolvimento de APIs RESTful para integração eficiente com o front end da aplicação.

<br>

## Metodologia de Desenvolvimento

O projeto seguirá **metodologia ágil**, com ciclos de *desenvolvimento curtos* e *entrega incremental*. Serão realizadas reuniões periódicas de revisão e planejamento para ajustes e melhorias contínuas.

<br>

## Requisitos para Conclusão

Além da implementação das funcionalidades mencionadas, a conclusão bem-sucedida do projeto exigirá a entrega de documentação técnica abrangente, testes unitários e integração contínua para garantir a qualidade do código produzido.

<br>

Este projeto visa não apenas atender aos requisitos técnicos, mas também proporcionar uma experiência prática e valiosa aos participantes da Formação Acelerada em programação.

<br>

## Configuração para uso do projeto

Após o clone do projeto, siga o passo a passo para a configuração e utilização do projeto em sua máquina.

<br>

**Passo 1** - Será necessário instalar todas as dependências do projeto, para isso, abra o projeto em seu VS Code e no terminal integrado execute o comando abaixo:

```bash
npm i
```

<br>

**Passo 2** - Após rodar o [Script MySQL](https://github.com/alphatechdigital7/MSCoworking_BACK/blob/main/Script/Script_DB_msCoworking.sql) para a criação do banco de dados mscoworking, é necessário configurar um usuário **admin** e dar todos os privilégios do mscoworking, dessa forma faremos com que todos os integrantes da equipe de desenvolvimento fiquem com a configuração do banco de dados igual, para que isso aconteça, basta rodar no seu usuário root do SGBD MySQL o seguinte script SQL:

```sql
CREATE USER 'admin'@'localhost' IDENTIFIED BY 'Softexback2023!$';
GRANT ALL PRIVILEGES ON mscoworking.* TO 'admin'@'localhost';
```

<br>

## Tutorial para modularização do MS Coworking

📝 - [Tutorial para MS Coworking](https://walterwa.notion.site/walterwa/Tutorial-para-MS-Coworking-acfccb8ebf404a58bf9843d7ee33e40b)